#!/usr/bin/env node
/**
 * Website Extraction Script
 * Extracts design tokens, screenshots, and assets from target websites
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TARGET_URL = process.argv[2] || 'https://www.besteny.com';
const OUTPUT_DIR = path.join(__dirname, '..', 'docs', 'research', 'besteny.com');
const SCREENSHOT_DIR = path.join(__dirname, '..', 'docs', 'design-references', 'besteny.com');

// Ensure directories exist
fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

async function extractWebsite() {
  console.log(`🔍 Starting extraction of ${TARGET_URL}...`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    // Set viewport sizes
    const viewports = [
      { name: 'desktop', width: 1440, height: 900 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 390, height: 844 }
    ];

    // Navigate to site
    console.log('🌐 Navigating to site...');
    await page.goto(TARGET_URL, { waitUntil: 'networkidle2', timeout: 60000 });
    await new Promise(r => setTimeout(r, 3000)); // Wait for animations

    // Extract design tokens
    console.log('🎨 Extracting design tokens...');
    const designTokens = await extractDesignTokens(page);
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'DESIGN_TOKENS.json'),
      JSON.stringify(designTokens, null, 2)
    );

    // Extract page topology
    console.log('📐 Extracting page topology...');
    const topology = await extractPageTopology(page);
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'PAGE_TOPOLOGY.json'),
      JSON.stringify(topology, null, 2)
    );

    // Extract all assets
    console.log('📦 Extracting assets...');
    const assets = await extractAssets(page);
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'ASSETS.json'),
      JSON.stringify(assets, null, 2)
    );

    // Take screenshots at all viewports
    for (const vp of viewports) {
      console.log(`📸 Taking ${vp.name} screenshots...`);
      await page.setViewport({ width: vp.width, height: vp.height });
      await new Promise(r => setTimeout(r, 1000));

      // Full page screenshot
      await page.screenshot({
        path: path.join(SCREENSHOT_DIR, `fullpage-${vp.name}.png`),
        fullPage: true
      });

      // Section screenshots
      const sections = await extractSections(page);
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section.height > 100) {
          try {
            await page.screenshot({
              path: path.join(SCREENSHOT_DIR, `section-${i}-${vp.name}.png`),
              clip: {
                x: section.x,
                y: section.y,
                width: Math.min(section.width, vp.width),
                height: Math.min(section.height, 2000)
              }
            });
          } catch (e) {
            console.log(`  ⚠️ Could not screenshot section ${i}`);
          }
        }
      }
    }

    // Extract component inventory
    console.log('🧩 Extracting component inventory...');
    const components = await extractComponents(page);
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'COMPONENT_INVENTORY.json'),
      JSON.stringify(components, null, 2)
    );

    // Extract behavior data
    console.log('🎬 Extracting interactions...');
    const behaviors = await extractBehaviors(page);
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'BEHAVIORS.json'),
      JSON.stringify(behaviors, null, 2)
    );

    console.log('\n✅ Extraction complete!');
    console.log(`📁 Output: ${OUTPUT_DIR}`);
    console.log(`🖼️  Screenshots: ${SCREENSHOT_DIR}`);

  } catch (error) {
    console.error('❌ Extraction failed:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

async function extractDesignTokens(page) {
  return await page.evaluate(() => {
    const tokens = {
      colors: {},
      typography: {},
      spacing: {},
      shadows: {},
      borderRadius: {}
    };

    // Extract colors from computed styles
    const elements = document.querySelectorAll('*');
    const colorSet = new Set();
    const bgSet = new Set();

    for (const el of elements) {
      const style = getComputedStyle(el);
      if (style.color && style.color !== 'rgba(0, 0, 0, 0)') colorSet.add(style.color);
      if (style.backgroundColor && style.backgroundColor !== 'rgba(0, 0, 0, 0)') bgSet.add(style.backgroundColor);
      if (style.borderColor && style.borderColor !== 'rgba(0, 0, 0, 0)') colorSet.add(style.borderColor);
    }

    tokens.colors.text = [...colorSet].slice(0, 20);
    tokens.colors.background = [...bgSet].slice(0, 20);

    // Extract typography
    const heading = document.querySelector('h1, h2, h3');
    const body = document.querySelector('p, span');
    const link = document.querySelector('a');

    if (heading) {
      const style = getComputedStyle(heading);
      tokens.typography.heading = {
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        lineHeight: style.lineHeight,
        letterSpacing: style.letterSpacing
      };
    }

    if (body) {
      const style = getComputedStyle(body);
      tokens.typography.body = {
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        lineHeight: style.lineHeight,
        letterSpacing: style.letterSpacing
      };
    }

    // Extract fonts from document
    const fontLinks = [...document.querySelectorAll('link[href*="font"]')].map(l => l.href);
    const googleFonts = [...document.querySelectorAll('link[href*="fonts.googleapis"]')].map(l => l.href);
    tokens.fonts = { fontLinks, googleFonts };

    return tokens;
  });
}

async function extractPageTopology(page) {
  return await page.evaluate(() => {
    const sections = [...document.querySelectorAll('section, [class*="section"], [class*="hero"], [class*="header"], [class*="footer"], [class*="banner"]')].map((el, i) => {
      const rect = el.getBoundingClientRect();
      const style = getComputedStyle(el);
      return {
        index: i,
        tagName: el.tagName,
        className: el.className,
        id: el.id,
        rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
        position: style.position,
        zIndex: style.zIndex,
        backgroundColor: style.backgroundColor,
        backgroundImage: style.backgroundImage
      };
    });

    return {
      title: document.title,
      url: window.location.href,
      totalHeight: document.body.scrollHeight,
      viewportHeight: window.innerHeight,
      sections
    };
  });
}

async function extractAssets(page) {
  return await page.evaluate(() => {
    const images = [...document.querySelectorAll('img')].map(img => ({
      src: img.src,
      alt: img.alt,
      width: img.naturalWidth,
      height: img.naturalHeight,
      currentSrc: img.currentSrc
    }));

    const videos = [...document.querySelectorAll('video')].map(v => ({
      src: v.src || v.querySelector('source')?.src,
      poster: v.poster
    }));

    const svgs = [...document.querySelectorAll('svg')].map((svg, i) => ({
      index: i,
      className: svg.className,
      viewBox: svg.getAttribute('viewBox'),
      innerHTML: svg.innerHTML.slice(0, 500)
    }));

    const bgImages = [...document.querySelectorAll('*')]
      .map(el => getComputedStyle(el).backgroundImage)
      .filter(bg => bg && bg !== 'none')
      .slice(0, 50);

    const favicons = [...document.querySelectorAll('link[rel*="icon"]')].map(l => ({
      href: l.href,
      sizes: l.sizes?.toString()
    }));

    return { images, videos, svgs, bgImages, favicons };
  });
}

async function extractSections(page) {
  return await page.evaluate(() => {
    const candidates = [
      ...document.querySelectorAll('section'),
      ...document.querySelectorAll('[class*="section"]'),
      ...document.querySelectorAll('header'),
      ...document.querySelectorAll('footer'),
      ...document.querySelectorAll('[class*="hero"]'),
      ...document.querySelectorAll('[class*="banner"]')
    ];

    return candidates.map(el => {
      const rect = el.getBoundingClientRect();
      return {
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
        tagName: el.tagName,
        className: el.className.slice(0, 100)
      };
    });
  });
}

async function extractComponents(page) {
  return await page.evaluate(() => {
    const components = [];

    // Buttons
    const buttons = [...document.querySelectorAll('button, [role="button"], [class*="btn"]')].map(btn => ({
      type: 'button',
      text: btn.textContent?.slice(0, 50),
      className: btn.className,
      styles: {
        backgroundColor: getComputedStyle(btn).backgroundColor,
        color: getComputedStyle(btn).color,
        borderRadius: getComputedStyle(btn).borderRadius,
        padding: getComputedStyle(btn).padding,
        fontSize: getComputedStyle(btn).fontSize
      }
    }));
    components.push(...buttons.slice(0, 10));

    // Cards
    const cards = [...document.querySelectorAll('[class*="card"], [class*="Card"]')].map(card => ({
      type: 'card',
      className: card.className.slice(0, 100),
      childCount: card.children.length
    }));
    components.push(...cards.slice(0, 10));

    // Navigation
    const navs = [...document.querySelectorAll('nav, [class*="nav"], [class*="menu"], [class*="Menu"]')].map(nav => ({
      type: 'navigation',
      tagName: nav.tagName,
      className: nav.className.slice(0, 100),
      itemCount: nav.querySelectorAll('a, li').length
    }));
    components.push(...navs.slice(0, 5));

    return components;
  });
}

async function extractBehaviors(page) {
  return await page.evaluate(() => {
    return {
      scrollBehavior: document.documentElement.style.scrollBehavior,
      smoothScroll: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'disabled' : 'enabled',
      animations: [...document.querySelectorAll('[class*="animate"], [class*="transition"]')].length,
      hasStickyHeader: [...document.querySelectorAll('header, [class*="header"]')].some(el =>
        getComputedStyle(el).position === 'sticky' || getComputedStyle(el).position === 'fixed'
      ),
      hasScrollSpy: [...document.querySelectorAll('[class*="scroll"], [class*="spy"]')].length > 0
    };
  });
}

extractWebsite();
