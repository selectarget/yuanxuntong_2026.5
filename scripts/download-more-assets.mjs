#!/usr/bin/env node
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

fs.mkdirSync(IMAGES_DIR, { recursive: true });

const additionalImages = [
  // About page
  { url: 'https://cdn.img.sooce.cn/nicetuku/202205/27/jpg/165364270146753a04dd82e37b43948306e02b0678b23.jpg', filename: '165364270146753a04dd82e37b43948306e02b0678b23.jpg' },
  { url: 'https://cdn.img.sooce.cn/nicetuku/202006/30/jpg/15935191925090217f868450f4b594471107850776d15.jpg', filename: '15935191925090217f868450f4b594471107850776d15.jpg' },
  // Contact page
  { url: 'https://cdn.img.sooce.cn/nicetuku/202004/30/jpg/158824555677059c05760ac15c9ea4f2e68d64fa17e2a.jpg', filename: '158824555677059c05760ac15c9ea4f2e68d64fa17e2a.jpg' },
  // Service detail page
  { url: 'https://cdn.img.sooce.cn/nicetuku/202206/17/jpg/1655456362330c855e6b63f199288565493c5540768a7.jpg', filename: '1655456362330c855e6b63f199288565493c5540768a7.jpg' },
];

async function downloadAssets() {
  console.log('📥 Downloading additional assets...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    for (const image of additionalImages) {
      const destPath = path.join(IMAGES_DIR, image.filename);

      if (fs.existsSync(destPath)) {
        console.log(`  ⏭️  Skipped: ${image.filename}`);
        continue;
      }

      try {
        const buffer = await page.evaluate(async (url) => {
          try {
            const response = await fetch(url);
            if (!response.ok) return null;
            const blob = await response.blob();
            const arrayBuffer = await blob.arrayBuffer();
            return Array.from(new Uint8Array(arrayBuffer));
          } catch (e) {
            return null;
          }
        }, image.url);

        if (buffer) {
          fs.writeFileSync(destPath, Buffer.from(buffer));
          console.log(`  ✅ Downloaded: ${image.filename}`);
        } else {
          console.log(`  ❌ Failed: ${image.filename}`);
        }
      } catch (err) {
        console.log(`  ❌ Error: ${image.filename} - ${err.message}`);
      }

      await new Promise(r => setTimeout(r, 500));
    }

    console.log('\n✅ Done!');

  } catch (error) {
    console.error('❌ Download failed:', error);
  } finally {
    await browser.close();
  }
}

downloadAssets();
