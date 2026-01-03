import sharp from 'sharp'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

const INPUT_DIR = 'public/images'
const QUALITY = 80

// Sizes based on PageSpeed recommendations
const RESPONSIVE_SIZES = {
  // For carousel/hero images (displayed at ~665-672px width)
  medium: 800,
  // For full-width images
  large: 1200,
  // Original size (max 1536px to match common displays)
  xlarge: 1536,
}

async function optimizeImage(inputPath: string, filename: string) {
  console.log(`\nProcessing: ${filename}`)

  try {
    const image = sharp(inputPath)
    const metadata = await image.metadata()

    console.log(`  Original: ${metadata.width}x${metadata.height}, ${metadata.format}`)

    // Generate WebP version at original size (but compressed)
    const webpPath = inputPath.replace(/\.jpg$/, '.webp')
    await image
      .webp({ quality: QUALITY })
      .toFile(webpPath)

    const webpStats = statSync(webpPath)
    console.log(`  ✓ WebP: ${Math.round(webpStats.size / 1024)}KB`)

    // Also optimize the original JPG (compress it)
    const optimizedJpgPath = inputPath.replace(/\.jpg$/, '_optimized.jpg')
    await sharp(inputPath)
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(optimizedJpgPath)

    const jpgStats = statSync(optimizedJpgPath)
    console.log(`  ✓ Optimized JPG: ${Math.round(jpgStats.size / 1024)}KB`)

    // Create responsive sizes for WebP (medium size for carousel items)
    if (metadata.width && metadata.width > RESPONSIVE_SIZES.medium) {
      const mediumWebpPath = inputPath.replace(/\.jpg$/, '-800w.webp')
      await sharp(inputPath)
        .resize(RESPONSIVE_SIZES.medium, null, { withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(mediumWebpPath)

      const mediumStats = statSync(mediumWebpPath)
      console.log(`  ✓ WebP 800w: ${Math.round(mediumStats.size / 1024)}KB`)
    }

  } catch (error) {
    console.error(`  ✗ Error processing ${filename}:`, error)
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n')
  console.log(`Input directory: ${INPUT_DIR}`)
  console.log(`WebP quality: ${QUALITY}%\n`)

  const files = readdirSync(INPUT_DIR)
  const jpgFiles = files.filter(f => f.endsWith('.jpg') && !f.includes('_optimized'))

  console.log(`Found ${jpgFiles.length} images to process\n`)

  for (const file of jpgFiles) {
    await optimizeImage(join(INPUT_DIR, file), file)
  }

  console.log('\n✅ Image optimization complete!')
  console.log('\nNext steps:')
  console.log('1. Review the generated WebP files')
  console.log('2. Replace original JPGs with _optimized.jpg versions if satisfied')
  console.log('3. Update components to use <picture> with WebP sources')
}

main().catch(console.error)
