'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const simplaraUrl = 'https://simplara-landing.vercel.app/ru'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream-50 to-cream-100 pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="mb-4 text-display-2 md:text-display-1 text-balance">
              {t.hero.title}<span className="gradient-text">{t.hero.titleHighlight}</span> — the AI cat who helps you look more stylish
            </h1>
            <p className="mb-6 text-body-lg text-charcoal-500 max-w-2xl">
              He lives inside{' '}
              <a
                href={simplaraUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center align-middle mx-1 hover:opacity-80 transition-opacity"
                aria-label="Visit SIMPLARA"
              >
                <Image
                  src="/assets/simplara-logo.png"
                  alt="SIMPLARA"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain inline-block"
                />
              </a>
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
                {t.hero.meetButton}
              </Button>
              <Button variant="secondary" size="lg" onClick={() => document.getElementById('who-is-lumi')?.scrollIntoView({ behavior: 'smooth' })}>
                {t.hero.seeActionButton}
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap gap-6 text-body-sm text-charcoal-500">
              <div>
                <p className="font-semibold text-charcoal-900">{t.hero.aiPowered}</p>
                <p>{t.hero.styleAssistant}</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal-900">{t.hero.forEveryone}</p>
                <p>{t.hero.menAndWomen}</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal-900">{t.hero.worksWith}</p>
                <p>{t.hero.yourWardrobe}</p>
              </div>
            </div>
          </div>

          {/* Right Column - LUMI Image */}
          <div className="order-1 lg:order-2 relative animate-slide-in-right">
            {/* Outer layer — visible as border frame */}
            <div className="relative flex aspect-square items-center justify-center rounded-3xl overflow-hidden">
              {/* Video behind */}
              <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 md:p-10 animate-float">
                <video
                  className="h-[99%] w-[99%] translate-y-0.5 object-contain sm:translate-y-1.5"
                  src="/assets/lumi-final.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              {/* First bg as rounded-square overlay with circular cutout */}
              <div className="pointer-events-none absolute inset-0 z-10 text-cream-300">
                <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true" focusable="false">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="
                      M18 0
                      H82
                      C92 0 100 8 100 18
                      V82
                      C100 92 92 100 82 100
                      H18
                      C8 100 0 92 0 82
                      V18
                      C0 8 8 0 18 0
                      Z
                      M50 50
                      m -41 0
                      a 41 41 0 1 0 82 0
                      a 41 41 0 1 0 -82 0
                      Z
                    "
                  />
                </svg>
              </div>

              {/* Second bg/frame on top of first bg */}
              <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
                <div className="h-[85%] w-[85%] text-cream-500">
                  <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true" focusable="false">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="
                        M18 0
                        H82
                        C92 0 100 8 100 18
                        V82
                        C100 92 92 100 82 100
                        H18
                        C8 100 0 92 0 82
                        V18
                        C0 8 8 0 18 0
                        Z
                        M50 50
                        m -41 0
                        a 41 41 0 1 0 82 0
                        a 41 41 0 1 0 -82 0
                        Z
                      "
                    />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-terracotta-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-charcoal-900/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-charcoal-900/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-charcoal-900/30 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
