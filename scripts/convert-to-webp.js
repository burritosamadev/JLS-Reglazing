import sharp from 'sharp';
import { readdirSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = join(__dirname, '../public/images');
const imageFiles = readdirSync(imagesDir).filter(file =>
  /\.(jpg|jpeg|png)$/i.test(file) && !file.includes('.webp')
);

console.log(`Found ${imageFiles.length} images to convert:\n`);

async function convertImages() {
  for (const file of imageFiles) {
    const inputPath = join(imagesDir, file);
    const outputPath = join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

    try {
      const metadata = await sharp(inputPath).metadata();
      console.log(`Converting ${file} (${metadata.width}x${metadata.height})...`);

      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);

      const originalSize = (await sharp(inputPath).metadata()).size;
      const webpSize = (await sharp(outputPath).metadata()).size;
      const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);

      console.log(`✓ ${file} → ${file.replace(/\.(jpg|jpeg|png)$/i, '.webp')} (${savings}% smaller)\n`);
    } catch (error) {
      console.error(`✗ Error converting ${file}:`, error.message);
    }
  }

  console.log('All images converted to WebP format!');
}

convertImages();
