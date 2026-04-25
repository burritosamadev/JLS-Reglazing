'use client'

interface BeforeAfterComparisonProps {
  beforeImage: string
  afterImage: string
  alt: string
  priority?: boolean
}

export default function BeforeAfterComparison({ beforeImage, afterImage, alt, priority = false }: BeforeAfterComparisonProps) {
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
