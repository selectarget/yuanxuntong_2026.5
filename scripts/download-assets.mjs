#!/usr/bin/env node
/**
 * Asset Download Script
 * Downloads all images and assets from target website
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
const SEO_DIR = path.join(PUBLIC_DIR, 'seo');

// Ensure directories exist
fs.mkdirSync(IMAGES_DIR, { recursive: true });
fs.mkdirSync(SEO_DIR, { recursive: true });

// Unique image URLs to download (from ASSETS.json)
const imageUrls = [
  // Logo
  'https://www.besteny.com/img/logo.png',
  // Banner images
  'https://cdn.img.sooce.cn/nicetuku/202005/11/jpg/15891959987870d77c867969299d02ce004b6e9d57d4e.jpg',
  'https://cdn.yun.sooce.cn/6/54039/png/1736395058097bd7b9776dd09b96c62ce9e477adc5dc6.png',
  'https://cdn.yun.sooce.cn/6/54039/png/173639607082451d1553f646425a93e2a411984a4666a.png',
  // Service icons
  'https://cdn.yun.sooce.cn/6/21689/png/1594274327419b435cf196888f181.png',
  'https://cdn.yun.sooce.cn/6/54039/webp/17343200421963d104fe5335d120b1a6074e9bbc065cc.webp',
  'https://cdn.yun.sooce.cn/6/21689/png/15942795638291f1ed80d57b9e17c.png',
  'https://cdn.yun.sooce.cn/6/54039/webp/17343201835602e256a453171ab97214e58937a13716d.webp',
  'https://cdn.yun.sooce.cn/6/54039/webp/173432024531008b763ddaed7c3f13e2c94ed17ba43d5.webp',
  'https://cdn.yun.sooce.cn/6/54039/webp/173432030293962b042b68582b29338061168cffa3a1e.webp',
  'https://cdn.yun.sooce.cn/6/54039/webp/1734320353641979c0a35fb6984657a0119121ab65002.webp',
  'https://cdn.yun.sooce.cn/6/54039/webp/17343204025843659efa8cda1377aacdca7cda137c255.webp',
  // Case study images
  'https://cdn.yun.sooce.cn/6/54039/png/173235996080506954b5cbf38943812d64a2ba249c62e.png',
  'https://cdn.yun.sooce.cn/6/54039/png/17323617515461a1395fd40089decc82f27ad168963fb.png',
  'https://cdn.yun.sooce.cn/6/54039/png/17323618181896135add0632a2dc3a9fde85fa8c87ba0.png',
  'https://cdn.yun.sooce.cn/6/54039/png/1732361977866a657391536b1dd3cea9cf75d887e331f.png',
  'https://cdn.yun.sooce.cn/6/54039/png/17323620429869a92faeef77a728be8d755d9d55aae46.png',
  'https://cdn.yun.sooce.cn/6/54039/png/17323621097551d638e499e5abd27820f52a8efca5ebb.png',
  // Contact section
  'https://cdn.yun.sooce.cn/6/22221/png/159548770764305dba7f0981003b5.png',
  'https://cdn.yun.sooce.cn/6/21689/png/15943528629504cdcbbe66394b309.png',
  'https://cdn.yun.sooce.cn/6/21689/png/1594352862953f669c8272956cd84.png',
  'https://cdn.yun.sooce.cn/6/21689/png/15943528629564d44fd76c0ebcecb.png',
  'https://cdn.yun.sooce.cn/6/21689/png/15943528629596555ff3b5086af45.png',
  // Stats/About images
  'https://cdn.yun.sooce.cn/6/54039/webp/1734491767076acd33604ca8f0a007c0bdd8fd87808f4.webp',
  'https://cdn.yun.sooce.cn/6/54039/png/17351391942554ffce04d92a4d6cb21c1494cdfcd6dc1.png',
  'https://cdn.yun.sooce.cn/6/54039/webp/17341720805904cd87ab6e81b054e3de38d9278565a2c.webp',
  // Background images
  'https://wds-service-1258344699.file.myqcloud.com/20/11473/jpg/1648006029585fba30495e8ed4793.jpg',
  'https://cdn.yun.sooce.cn/6/21689/png/15942765598353e2b78c7726c8890.png',
  'https://cdn.yun.sooce.cn/6/22221/jpg/15954869608556a4f2c035bfeb4b9.jpg',
  'https://cdn.yun.sooce.cn/6/22221/png/159548785698674703297b00796af.png',
  // Favicon
  'https://www.besteny.com/img/upimages/favicon.ico'
];

function getFileNameFromUrl(url) {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const basename = path.basename(pathname);
    // Remove query parameters from filename
    return basename.split('?')[0];
  } catch (e) {
    return `asset-${Date.now()}`;
  }
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;

    const request = protocol.get(url, { timeout: 30000 }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        downloadFile(response.headers.location, destPath)
          .then(resolve)
          .catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(destPath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    });

    request.on('error', (err) => {
      reject(err);
    });

    request.on('timeout', () => {
      request.destroy();
      reject(new Error(`Timeout downloading ${url}`));
    });
  });
}

async function downloadAssets() {
  console.log('📥 Starting asset download...\n');

  let successCount = 0;
  let failCount = 0;

  // Process in batches of 4
  const batchSize = 4;
  for (let i = 0; i < imageUrls.length; i += batchSize) {
    const batch = imageUrls.slice(i, i + batchSize);

    await Promise.all(batch.map(async (url) => {
      const fileName = getFileNameFromUrl(url);
      const isFavicon = fileName === 'favicon.ico';
      const destDir = isFavicon ? SEO_DIR : IMAGES_DIR;
      const destPath = path.join(destDir, fileName);

      // Skip if already exists
      if (fs.existsSync(destPath)) {
        console.log(`  ⏭️  Skipped (exists): ${fileName}`);
        successCount++;
        return;
      }

      try {
        await downloadFile(url, destPath);
        console.log(`  ✅ Downloaded: ${fileName}`);
        successCount++;
      } catch (err) {
        console.log(`  ❌ Failed: ${fileName} - ${err.message}`);
        failCount++;
      }
    }));

    // Small delay between batches
    if (i + batchSize < imageUrls.length) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  console.log(`\n📊 Download Summary:`);
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ❌ Failed: ${failCount}`);
  console.log(`\n📁 Assets saved to: ${IMAGES_DIR}`);
}

downloadAssets().catch(console.error);
