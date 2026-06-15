'use client'

import { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function Card({ children, className = '', hover = true, ...props }: CardProps) {
  return (
    <div 
      className={`rounded-2xl border border-cream-400 bg-cream-50 p-6 shadow-sm transition-all duration-300 ${
        hover ? 'hover:shadow-md hover:border-cream-500' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

interface FeatureCardProps {
  icon?: ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <Card className={className}>
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="mb-3 text-h4">{title}</h3>
      <p className="text-body text-charcoal-500">{description}</p>
    </Card>
  )
}
