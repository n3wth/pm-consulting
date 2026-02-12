#!/usr/bin/env node

/**
 * Image Optimization Script for StrategyPM
 * Converts external avatar images to optimized local WebP/AVIF with blur placeholders
 * 
 * Usage: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const https = require('https');
const { promisify } = require('util');

const testimonials = require('../testimonials.json');

const publicDir = path.join(__dirname, '../public/optimized');
const tmpDir = path.join(__dirname, '../.tmp-images');

// Ensure directories exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir, { recursive: true });
}

/**
 * Download image from URL
 */
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(tmpDir, filename);
    const file = fs.createWriteStream(filepath);

    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
          return;
        }
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(filepath);
        });
      })
      .on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete on error
        reject(err);
      });
  });
}

/**
 * Generate blur placeholder (tiny blurred image as data URL)
 */
async function generateBlurPlaceholder(inputPath, size = 10) {
  try {
    const buffer = await sharp(inputPath)
      .resize(size, size, { fit: 'cover' })
      .blur(3)
      .png()
      .toBuffer();
    
    return `data:image/png;base64,${buffer.toString('base64')}`;
  } catch (err) {
    console.warn(`Warning: Could not generate blur placeholder: ${err.message}`);
    return null;
  }
}

/**
 * Optimize a single image
 */
async function optimizeImage(url, slug, author) {
  try {
    console.log(`📸 Processing: ${author}...`);

    // Download original
    const tmpFilename = `${slug}-original.jpg`;
    const originalPath = await downloadImage(url, tmpFilename);

    // Generate blur placeholder
    const blurPlaceholder = await generateBlurPlaceholder(originalPath);

    // Convert to WebP (main format)
    const webpFilename = `${slug}.webp`;
    const webpPath = path.join(publicDir, webpFilename);
    await sharp(originalPath)
      .resize(150, 150, { fit: 'cover' })
      .webp({ quality: 85 })
      .toFile(webpPath);

    // Convert to AVIF (fallback format)
    const avifFilename = `${slug}.avif`;
    const avifPath = path.join(publicDir, avifFilename);
    await sharp(originalPath)
      .resize(150, 150, { fit: 'cover' })
      .avif({ quality: 80 })
      .toFile(avifPath);

    // Also keep a PNG for better compatibility
    const pngFilename = `${slug}.png`;
    const pngPath = path.join(publicDir, pngFilename);
    await sharp(originalPath)
      .resize(150, 150, { fit: 'cover' })
      .png()
      .toFile(pngPath);

    // Log sizes
    const webpSize = fs.statSync(webpPath).size;
    const avifSize = fs.statSync(avifPath).size;
    const origSize = fs.statSync(originalPath).size;

    console.log(`   ✅ WebP: ${(webpSize / 1024).toFixed(1)}KB (from ${(origSize / 1024).toFixed(1)}KB)`);
    console.log(`   ✅ AVIF: ${(avifSize / 1024).toFixed(1)}KB`);

    // Clean up
    fs.unlinkSync(originalPath);

    return {
      slug,
      author,
      webp: `/optimized/${webpFilename}`,
      avif: `/optimized/${avifFilename}`,
      png: `/optimized/${pngFilename}`,
      blur: blurPlaceholder,
      width: 150,
      height: 150,
    };
  } catch (err) {
    console.error(`❌ Failed to optimize ${author}: ${err.message}`);
    return null;
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting image optimization...\n');

  const optimized = [];

  for (const testimonial of testimonials) {
    if (!testimonial.image) {
      console.log(`⊘ Skipping ${testimonial.author} (no image)`);
      continue;
    }

    const slug = testimonial.author
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

    try {
      const result = await optimizeImage(testimonial.image, slug, testimonial.author);
      if (result) {
        optimized.push(result);
      }
    } catch (err) {
      console.error(`Error processing ${testimonial.author}:`, err.message);
    }
  }

  // Write metadata
  const metadataPath = path.join(publicDir, 'images.json');
  fs.writeFileSync(metadataPath, JSON.stringify(optimized, null, 2));

  console.log(`\n✅ Optimization complete!`);
  console.log(`   📦 Images saved to: ${publicDir}`);
  console.log(`   📋 Metadata saved to: ${metadataPath}`);
  console.log(`   📊 Total images: ${optimized.length}`);

  // Cleanup temp directory
  fs.rmSync(tmpDir, { recursive: true, force: true });

  return optimized;
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
