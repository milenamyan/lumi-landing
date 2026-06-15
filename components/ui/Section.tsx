'use client'

import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-custom">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ 
  title, 
  subtitle, 
  description, 
  centered = false, 
  className = '' 
}: SectionHeaderProps) {
  const alignment = centered ? 'text-center mx-auto' : 'text-left'
  const maxWidth = centered ? 'max-w-3xl' : 'max-w-4xl'

  return (
    <div className={`mb-8 md:mb-10 ${alignment} ${maxWidth} ${className}`}>
      {subtitle && (
        <p className="mb-3 text-body-sm font-semibold uppercase tracking-wider text-terracotta-500">
          {subtitle}
        </p>
      )}
      <h2 className="mb-4 text-display-3 md:text-display-2">{title}</h2>
      {description && (
        <p className="text-body-lg text-charcoal-500">{description}</p>
      )}
    </div>
  )
}
