#!/usr/bin/env node
/**
 * Extract content from multiple pages
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '..', 'docs', 'research', 'besteny.com');

const pages = [
  {
    name: 'about',
    url: 'https://www.besteny.com/company_information.html',
    outputFile: 'PAGE_ABOUT.json'
  },
  {
    name: 'contact',
    url: 'https://www.besteny.com/contact_us.html',
    outputFile: 'PAGE_CONTACT.json'
  },
  {
    name: 'service-detail',
    url: 'https://www.besteny.com/led_page.html',
    outputFile: 'PAGE_SERVICE_DETAIL.json'
  }
];

async function extractPage(browser, pageInfo) {
  console.log(`\n🔍 Extracting ${pageInfo.name} page...`);

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  try {
    await page.goto(pageInfo.url, { waitUntil: 'networkidle2', timeout: 60000 });
    await new Promise(r => setTimeout(r, 2000));

    // Extract page content
    const content = await page.evaluate(() => {
      // Get main content
      const mainContent = document.querySelector('.content, .main, article, .container') || document.body;

      // Extract text content
      const textContent = mainContent.innerText;

      // Extract images
      const images = [...mainContent.querySelectorAll('img')].map(img => ({
        src: img.src,
        alt: img.alt,
        width: img.naturalWidth,
        height: img.naturalHeight
      })).filter(img => img.width > 50);

      // Extract headings
      const headings = [...mainContent.querySelectorAll('h1, h2, h3, h4, h5, h6')].map(h => ({
        level: h.tagName,
        text: h.innerText.trim()
      }));

      // Extract sections
      const sections = [...mainContent.querySelectorAll('section, .section, [class*="section"], [class*="about"], [class*="contact"]')].map((section, i) => ({
        index: i,
        tagName: section.tagName,
        className: section.className.slice(0, 100),
        text: section.innerText.slice(0, 500)
      }));

      return {
        title: document.title,
        url: window.location.href,
        textContent: textContent.slice(0, 5000),
        headings,
        images,
        sections: sections.slice(0, 10)
      };
    });

    // Save content
    fs.writeFileSync(
      path.join(OUTPUT_DIR, pageInfo.outputFile),
      JSON.stringify(content, null, 2)
    );

    // Take screenshot
    await page.screenshot({
      path: path.join(OUTPUT_DIR, `${pageInfo.name}-screenshot.png`),
      fullPage: true
    });

    console.log(`  ✅ ${pageInfo.name} extracted successfully`);
    console.log(`     - Title: ${content.title}`);
    console.log(`     - Images: ${content.images.length}`);
    console.log(`     - Headings: ${content.headings.length}`);

  } catch (error) {
    console.error(`  ❌ Failed to extract ${pageInfo.name}:`, error.message);
  } finally {
    await page.close();
  }
}

async function main() {
  console.log('📥 Starting page extraction...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    for (const pageInfo of pages) {
      await extractPage(browser, pageInfo);
    }

    console.log('\n✅ All pages extracted!');
    console.log(`📁 Output: ${OUTPUT_DIR}`);

  } catch (error) {
    console.error('❌ Extraction failed:', error);
  } finally {
    await browser.close();
  }
}

main();
