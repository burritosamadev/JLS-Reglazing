import { useState } from 'react'
import { motion } from 'framer-motion'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  alt: string
  priority?: boolean // Set true for above-the-fold sliders to eager load and prevent layout shift
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  alt,
  priority = false,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => {
    setIsHovering(false)
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // On desktop: glide on hover (no need to click/drag)
    // On mobile: handled by touch events
    if (isHovering || isDragging) {
      const rect = e.currentTarget.getBoundingClientRect()
      handleMove(e.clientX, rect)
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault() // Prevent page scrolling while dragging
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.touches[0].clientX, rect)
  }

  const handleTouchStart = () => {
    setIsDragging(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-2xl cursor-col-resize select-none touch-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <picture>
          <source
            srcSet={`${afterImage.replace('.webp', '-800w.webp')} 800w, ${afterImage} 1536w`}
            sizes="(max-width: 768px) 100vw, 800px"
            type="image/webp"
          />
          <img
            src={afterImage.replace('.webp', '.jpg')}
            alt={`${alt} - After`}
            className="w-full h-full object-cover"
            draggable={false}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
          />
        </picture>
        <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-orbitron font-bold text-sm shadow-lg">
          AFTER
        </div>
      </div>

      {/* Before Image (Foreground with clip) */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <picture>
          <source
            srcSet={`${beforeImage.replace('.webp', '-800w.webp')} 800w, ${beforeImage} 1536w`}
            sizes="(max-width: 768px) 100vw, 800px"
            type="image/webp"
          />
          <img
            src={beforeImage.replace('.webp', '.jpg')}
            alt={`${alt} - Before`}
            className="w-full h-full object-cover"
            draggable={false}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
          />
        </picture>
        <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-orbitron font-bold text-sm shadow-lg">
          BEFORE
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-gray-200">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}
