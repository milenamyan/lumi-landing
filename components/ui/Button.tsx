'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 active:scale-95'
  
  const variants = {
    primary: 'bg-charcoal-900 text-cream-50 hover:bg-charcoal-800 hover:shadow-lg',
    secondary: 'border-2 border-charcoal-900 bg-transparent text-charcoal-900 hover:bg-charcoal-900 hover:text-cream-50',
    tertiary: 'text-charcoal-900 hover:text-terracotta-500',
  }
  
  const sizes = {
    sm: 'px-6 py-2 text-body-sm rounded-full',
    md: 'px-8 py-4 text-body rounded-full',
    lg: 'px-10 py-5 text-body-lg rounded-full',
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
