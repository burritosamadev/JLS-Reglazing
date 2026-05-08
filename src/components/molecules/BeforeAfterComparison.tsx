'use client'

interface BeforeAfterComparisonProps {
  /** Before image path (used in side-by-side variant) */
  beforeImage?: string
  /** After image path (used in side-by-side variant) */
  afterImage?: string
  /** Single composite image path (used in composite variant) — should already contain before/after as one design */
  compositeImage?: string
  /** Alt text describing the transformation */
  alt: string
  /** Eager-load + high fetchPriority — only use for above-the-fold images */
  priority?: boolean
  /** 'side-by-side' (default) renders 2-column before/after; 'composite' renders a single pre-composed image */
  variant?: 'side-by-side' | 'composite'
  /** Aspect ratio for the card (only used in composite variant; side-by-side is fixed at 4:3 per image) */
  aspectRatio?: '4/3' | '1/1' | '4/5' | '16/9' | '3/4'
}

const aspectClassMap: Record<NonNullable<BeforeAfterComparisonProps['aspectRatio']>, string> = {
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
  '4/5': 'aspect-[4/5]',
  '16/9': 'aspect-video',
  '3/4': 'aspect-[3/4]',
}

export default function BeforeAfterComparison({
  beforeImage,
  afterImage,
  compositeImage,
  alt,
  priority = false,
  variant = 'side-by-side',
  aspectRatio = '4/3',
}: BeforeAfterComparisonProps) {
  // Composite variant: single pre-composed image
  if (variant === 'composite' && compositeImage) {
    const aspectClass = aspectClassMap[aspectRatio]
    const match = compositeImage.match(/^(.+)\.(webp|jpe?g|png)$/i)
    const small = match ? `${match[1]}-800w.${match[2]}` : compositeImage
    return (
      <div className={`relative ${aspectClass} rounded-xl overflow-hidden shadow-2xl`}>
        <img
          src={compositeImage}
          srcSet={`${small} 800w, ${compositeImage} 1536w`}
          sizes="(max-width: 768px) 100vw, 600px"
          alt={alt}
          className="w-full h-full object-cover"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
        />
      </div>
    )
  }

  // Default: side-by-side variant
  if (!beforeImage || !afterImage) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 rounded-xl overflow-hidden shadow-2xl">
      {/* Before */}
      <div className="relative aspect-[4/3]">
        <picture>
          <source
            srcSet={`${beforeImage.replace('.webp', '-800w.webp')} 800w, ${beforeImage} 1536w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            type="image/webp"
          />
          <img
            src={beforeImage.replace('.webp', '.jpg')}
            alt={`${alt} - Before`}
            className="w-full h-full object-cover"
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
          />
        </picture>
        <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-orbitron font-bold text-sm shadow-lg">
          BEFORE
        </div>
      </div>

      {/* After */}
      <div className="relative aspect-[4/3]">
        <picture>
          <source
            srcSet={`${afterImage.replace('.webp', '-800w.webp')} 800w, ${afterImage} 1536w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            type="image/webp"
          />
          <img
            src={afterImage.replace('.webp', '.jpg')}
            alt={`${alt} - After`}
            className="w-full h-full object-cover"
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
          />
        </picture>
        <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-orbitron font-bold text-sm shadow-lg">
          AFTER
        </div>
      </div>
    </div>
  )
}
