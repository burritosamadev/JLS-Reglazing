interface WaveDividerProps {
  variant?: '1' | '2' | 'light'
  position?: 'top' | 'bottom'
  className?: string
}

export default function WaveDivider({
  variant = '1',
  position = 'bottom',
  className = ''
}: WaveDividerProps) {
  const svgPath = `/vectors/wave-divider-${variant}.svg`

  return (
    <div
      className={`absolute ${position === 'top' ? 'top-0 rotate-180' : 'bottom-0'} left-0 w-full pointer-events-none ${className}`}
      style={{ height: variant === '2' ? '100px' : '120px' }}
    >
      <img
        src={svgPath}
        alt=""
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  )
}
