#!/usr/bin/env node
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '..', 'docs', 'design-references', 'clone');

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const pages = [
  { path: '/about', name: 'about' },
  { path: '/contact', name: 'contact' },
  { path: '/services/wind', name: 'service-wind' }
];

async function takeScreenshots() {
  console.log('📸 Taking screenshots of new pages...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    for (const p of pages) {
      const url = `http://localhost:3000${p.path}`;
      console.log(`  📷 Capturing ${p.path}...`);

      try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
        await new Promise(r => setTimeout(r, 2000));

        await page.screenshot({
          path: path.join(OUTPUT_DIR, `${p.name}-page.png`),
          fullPage: true
        });

        console.log(`     ✅ ${p.name} saved`);
      } catch (err) {
        console.log(`     ❌ Failed: ${err.message}`);
      }
    }

    console.log(`\n📁 Screenshots saved to: ${OUTPUT_DIR}`);

  } catch (error) {
    console.error('❌ Screenshot failed:', error);
  } finally {
    await browser.close();
  }
}

takeScreenshots();
