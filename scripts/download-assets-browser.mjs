#!/usr/bin/env node
/**
 * Asset Download Script using Puppeteer
 * Downloads all images and assets from target website via browser
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
const SEO_DIR = path.join(PUBLIC_DIR, 'seo');

// Ensure directories exist
fs.mkdirSync(IMAGES_DIR, { recursive: true });
fs.mkdirSync(SEO_DIR, { recursive: true });

const TARGET_URL = 'https://www.besteny.com';

async function downloadAssets() {
  console.log('🔍 Opening browser to download assets...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    // Navigate to site
    await page.goto(TARGET_URL, { waitUntil: 'networkidle2', timeout: 60000 });
    await new Promise(r => setTimeout(r, 2000));

    // Get all image URLs
    const imageData = await page.evaluate(() => {
      const images = [...document.querySelectorAll('img')];
      return images.map(img => ({
        src: img.src,
        alt: img.alt,
        width: img.naturalWidth,
        height: img.naturalHeight
      })).filter(img => img.src && img.width > 50); // Filter out small icons
    });

    console.log(`📸 Found ${imageData.length} images\n`);

    // Download images using browser's fetch
    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < imageData.length; i++) {
      const img = imageData[i];
      const url = img.src;

      try {
        const urlObj = new URL(url);
        const fileName = path.basename(urlObj.pathname).split('?')[0] || `image-${i}.png`;
        const destPath = path.join(IMAGES_DIR, fileName);

        // Skip if already exists
        if (fs.existsSync(destPath)) {
          console.log(`  ⏭️  Skipped: ${fileName}`);
          successCount++;
          continue;
        }

        // Download via browser
        const buffer = await page.evaluate(async (imageUrl) => {
          try {
            const response = await fetch(imageUrl);
            if (!response.ok) return null;
            const blob = await response.blob();
            const arrayBuffer = await blob.arrayBuffer();
            return Array.from(new Uint8Array(arrayBuffer));
          } catch (e) {
            return null;
          }
        }, url);

        if (buffer) {
          fs.writeFileSync(destPath, Buffer.from(buffer));
          console.log(`  ✅ Downloaded: ${fileName} (${img.alt.slice(0, 30)})`);
          successCount++;
        } else {
          console.log(`  ❌ Failed: ${fileName}`);
          failCount++;
        }
      } catch (err) {
        console.log(`  ❌ Error: ${url.slice(0, 50)}... - ${err.message}`);
        failCount++;
      }

      // Small delay
      await new Promise(r => setTimeout(r, 100));
    }

    // Also download favicon
    try {
      const faviconUrl = await page.evaluate(() => {
        const link = document.querySelector('link[rel*="icon"]');
        return link ? link.href : '/img/upimages/favicon.ico';
      });

      const faviconBuffer = await page.evaluate(async (url) => {
        try {
          const response = await fetch(url);
          if (!response.ok) return null;
          const blob = await response.blob();
          const arrayBuffer = await blob.arrayBuffer();
          return Array.from(new Uint8Array(arrayBuffer));
        } catch (e) {
          return null;
        }
      }, faviconUrl);

      if (faviconBuffer) {
        fs.writeFileSync(path.join(SEO_DIR, 'favicon.ico'), Buffer.from(faviconBuffer));
        console.log(`  ✅ Downloaded: favicon.ico`);
        successCount++;
      }
    } catch (e) {
      console.log(`  ⚠️ Could not download favicon`);
    }

    console.log(`\n📊 Download Summary:`);
    console.log(`   ✅ Success: ${successCount}`);
    console.log(`   ❌ Failed: ${failCount}`);
    console.log(`\n📁 Assets saved to: ${IMAGES_DIR}`);

  } catch (error) {
    console.error('❌ Download failed:', error);
  } finally {
    await browser.close();
  }
}

downloadAssets();
