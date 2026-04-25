#!/usr/bin/env node
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '..', 'docs', 'design-references', 'clone');

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

async function takeScreenshots() {
  console.log('📸 Taking screenshots of clone...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    const viewports = [
      { name: 'desktop', width: 1440, height: 900 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 390, height: 844 }
    ];

    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height });

      // Navigate to local dev server
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 2000)); // Wait for images to load

      // Full page screenshot
      await page.screenshot({
        path: path.join(OUTPUT_DIR, `fullpage-${vp.name}.png`),
        fullPage: true
      });

      console.log(`  ✅ ${vp.name} screenshot saved`);
    }

    console.log(`\n📁 Screenshots saved to: ${OUTPUT_DIR}`);

  } catch (error) {
    console.error('❌ Screenshot failed:', error);
  } finally {
    await browser.close();
  }
}

takeScreenshots();
