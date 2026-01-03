import type { ReactNode } from 'react'

type CardVariant = 'default' | 'hover' | 'feature' | 'cta'

interface CardProps {
  variant?: CardVariant
  className?: string
  children: ReactNode
  onClick?: () => void
}

const variantStyles = {
  default: 'bg-white rounded-xl p-6 shadow-lg',
  hover: 'bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300',
  feature: 'bg-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300',
  cta: 'bg-primary-100 text-white rounded-xl p-8 shadow-lg',
}

export default function Card({
  variant = 'default',
  className = '',
  children,
  onClick
}: CardProps) {
  const classes = `${variantStyles[variant]} ${className}`

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  )
}
