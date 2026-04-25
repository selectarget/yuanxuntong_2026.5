#!/usr/bin/env node
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '..', 'docs', 'research', 'besteny.com');

const pages = [
  {
    name: 'service-solar',
    url: 'https://www.besteny.com/copy_led_page.html',
    outputFile: 'PAGE_SERVICE_SOLAR.json'
  },
  {
    name: 'service-storage',
    url: 'https://www.besteny.com/copy_led_page_735780.html',
    outputFile: 'PAGE_SERVICE_STORAGE.json'
  },
  {
    name: 'service-battery',
    url: 'https://www.besteny.com/copy_copy_led_page_735780.html',
    outputFile: 'PAGE_SERVICE_BATTERY.json'
  },
  {
    name: 'service-simulation',
    url: 'https://www.besteny.com/copy_copy_copy_led_page_735780.html',
    outputFile: 'PAGE_SERVICE_SIMULATION.json'
  }
];

async function extractPage(browser, pageInfo) {
  console.log(`\n🔍 Extracting ${pageInfo.name}...`);

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  try {
    await page.goto(pageInfo.url, { waitUntil: 'networkidle2', timeout: 60000 });
    await new Promise(r => setTimeout(r, 2000));

    const content = await page.evaluate(() => {
      const mainContent = document.querySelector('.content, .main, article, .container') || document.body;

      const textContent = mainContent.innerText;

      const images = [...mainContent.querySelectorAll('img')].map(img => ({
        src: img.src,
        alt: img.alt,
        width: img.naturalWidth,
        height: img.naturalHeight
      })).filter(img => img.width > 100);

      const title = document.querySelector('h1, .title, [class*="title"]');
      const subtitle = document.querySelector('h2, .subtitle, [class*="subtitle"]');

      return {
        pageTitle: document.title,
        url: window.location.href,
        title: title?.innerText?.trim() || '',
        subtitle: subtitle?.innerText?.trim() || '',
        textContent: textContent.slice(0, 8000),
        images: images.slice(0, 10)
      };
    });

    fs.writeFileSync(
      path.join(OUTPUT_DIR, pageInfo.outputFile),
      JSON.stringify(content, null, 2)
    );

    await page.screenshot({
      path: path.join(OUTPUT_DIR, `${pageInfo.name}-screenshot.png`),
      fullPage: true
    });

    console.log(`  ✅ ${pageInfo.name} extracted`);
    console.log(`     - Title: ${content.title || content.pageTitle.slice(0, 50)}`);
    console.log(`     - Images: ${content.images.length}`);

  } catch (error) {
    console.error(`  ❌ Failed: ${error.message}`);
  } finally {
    await page.close();
  }
}

async function main() {
  console.log('📥 Extracting service detail pages...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    for (const pageInfo of pages) {
      await extractPage(browser, pageInfo);
    }

    console.log('\n✅ All service pages extracted!');

  } catch (error) {
    console.error('❌ Extraction failed:', error);
  } finally {
    await browser.close();
  }
}

main();
