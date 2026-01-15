# Video Thumbnail Creation Instructions

## Required Thumbnail

**File**: `public/images/reglazing-process-thumbnail.jpg`
**Dimensions**: 1280x720 pixels (16:9 aspect ratio)
**Purpose**: Poster image for the "Reglazing Process" video on homepage

## Design Specifications

### Option 1: Extract Frame from Video (Recommended if you have ffmpeg)

```bash
# Install ffmpeg first (if not installed):
# brew install ffmpeg  # macOS
# sudo apt-get install ffmpeg  # Linux

# Extract frame at 3 seconds
ffmpeg -i public/videos/video6.mp4 -ss 00:00:03 -vframes 1 -s 1280x720 public/images/reglazing-process-thumbnail.jpg

# Create WebP version
ffmpeg -i public/images/reglazing-process-thumbnail.jpg -q:v 85 public/images/reglazing-process-thumbnail.webp
```

### Option 2: Design Custom Thumbnail

Use Canva, Photoshop, or any design tool:

**Background**:
- Use a split-screen of before/after images (`1_before.jpg` and `1_after.jpg`)
- OR use a solid dark background (#232423)

**Text Overlay**:
- **Main Title**: "Bathtub Reglazing Process"
  - Font: Orbitron (or bold sans-serif)
  - Color: White (#FFFFFF)
  - Size: 80-100px
  - Position: Center, upper third

- **Subtitle**: "Professional Refinishing in 24 Hours"
  - Font: Jost (or clean sans-serif)
  - Color: Orange (#FB8040)
  - Size: 40-50px
  - Position: Below title

**Additional Elements** (optional):
- Semi-transparent dark overlay (rgba(35, 36, 35, 0.7)) for text legibility
- Play button icon in center
- JLS Reglazing branding

**Brand Colors**:
- Dark: #232423
- Orange: #FB8040
- Cream: #FAF8F3

### Option 3: Quick Solution - Use Existing Image

Simply copy one of the best before/after images as the thumbnail:

```bash
cp public/images/1_before.jpg public/images/reglazing-process-thumbnail.jpg
cp public/images/1_before.webp public/images/reglazing-process-thumbnail.webp
```

## File Requirements

Create both formats for optimal performance:
- `public/images/reglazing-process-thumbnail.jpg` (JPEG, quality 85%)
- `public/images/reglazing-process-thumbnail.webp` (WebP, quality 85%)

## Testing

After creating the thumbnail, the video component will automatically display it as the poster image. Refresh your browser at `http://localhost:5176` to see the result.

## Status

✅ Video element updated with `poster` attribute
⏳ Thumbnail image needs to be created using one of the methods above
