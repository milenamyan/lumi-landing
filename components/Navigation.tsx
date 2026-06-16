'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const simplaraUrl = 'https://simplara-landing.vercel.app/ru'

  const navLinks = [
    { label: t.nav.aboutLumi, href: 'who-is-lumi' },
    { label: t.nav.features, href: 'outfit-selection' },
    { label: t.nav.battles, href: 'fashion-battles' },
    { label: t.nav.faq, href: 'faq' },
  ]

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-[100] overflow-visible">
      <div
        className={`transition-all duration-300 ${
          isMobileMenuOpen
            ? 'bg-cream-50'
            : isScrolled
              ? 'bg-cream-50/95 shadow-md backdrop-blur-md'
              : ''
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
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-body font-medium text-charcoal-900 hover:text-terracotta-500 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={simplaraUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-80 transition-opacity"
                aria-label="Visit SIMPLARA"
              >
                <Image
                  src="/assets/simplara-logo.png"
                  alt="SIMPLARA"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </a>
              <LanguageSwitcher />
              <Button
                variant="primary"
                size="sm"
                onClick={() => scrollToSection('waitlist')}
              >
                {t.nav.joinWaitlist}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-charcoal-900"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
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
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-2xl border border-cream-300 bg-cream-50 p-4 shadow-lg animate-fade-in">
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
              <a
                href={simplaraUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-body font-medium text-charcoal-900 hover:text-terracotta-500 transition-colors"
              >
                <Image
                  src="/assets/simplara-logo.png"
                  alt="SIMPLARA"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
                {t.nav.visitSimplara}
              </a>
              <div className="flex justify-center py-2">
                <LanguageSwitcher />
              </div>
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToSection('waitlist')}
                className="w-full"
              >
                {t.nav.joinWaitlist}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
