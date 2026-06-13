'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { label: 'About LUMI', href: 'who-is-lumi' },
    { label: 'Features', href: 'outfit-selection' },
    { label: 'Battles', href: 'fashion-battles' },
    { label: 'FAQ', href: 'faq' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 text-h3 font-bold text-charcoal-900 hover:text-terracotta-500 transition-colors"
          >
            <Image
              src="/assets/lumi1.png"
              alt="LUMI"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
              priority
            />
            LUMI
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-body font-medium text-charcoal-900 hover:text-terracotta-500 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection('waitlist')}
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-charcoal-900"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-body font-medium text-charcoal-900 hover:text-terracotta-500 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToSection('waitlist')}
                className="w-full"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
