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
          <div className="animate-fade-in">
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
          <div className="relative animate-slide-in-right">
            {/* Outer layer — visible as border frame */}
            <div className="relative flex aspect-square items-center justify-center rounded-3xl bg-cream-300">
              {/* Inner layer — 75% size, slightly brighter */}
              <div className="relative flex h-[75%] w-[75%] items-center justify-center rounded-2xl bg-cream-100 p-6 sm:p-8 md:p-10">
                <div className="relative h-full w-full flex items-center justify-center animate-float">
                  <Image
                    src="/assets/lumi1.png"
                    alt="LUMI - AI Fashion Companion"
                    width={400}
                    height={400}
                    className="object-contain drop-shadow-lg"
                    priority
                  />
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
