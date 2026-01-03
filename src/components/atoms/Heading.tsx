import type { ReactNode } from 'react'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type HeadingStyle = 'hero' | 'section' | 'subsection' | 'card'

interface HeadingProps {
  as?: HeadingLevel
  styleAs?: HeadingStyle
  className?: string
  children: ReactNode
}

const styles = {
  hero: 'hero-title',  // Uses existing CSS class from index.css
  section: 'section-title',  // Uses existing CSS class from index.css
  subsection: 'text-2xl font-orbitron font-semibold text-navy-900',
  card: 'text-xl font-orbitron font-semibold text-navy-900',
}

export default function Heading({
  as: Tag = 'h2',
  styleAs = 'section',
  className = '',
  children
}: HeadingProps) {
  const classes = `${styles[styleAs]} ${className}`

  return <Tag className={classes}>{children}</Tag>
}
