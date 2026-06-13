'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream-50 to-cream-100">
      <div className="container-custom py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <h1 className="mb-6 text-display-2 md:text-display-1 text-balance">
              This is <span className="gradient-text">LUMI</span> — the AI cat who helps you look more stylish
            </h1>
            <p className="mb-8 text-body-lg text-charcoal-500 max-w-2xl">
              He lives inside SIMPLARA, builds outfits from your wardrobe, helps evaluate style, 
              and supports you in fashion battles. LUMI is not just a mascot — he&apos;s your personal 
              fashion companion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
                Meet LUMI
              </Button>
              <Button variant="secondary" size="lg" onClick={() => document.getElementById('who-is-lumi')?.scrollIntoView({ behavior: 'smooth' })}>
                See LUMI in Action
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-8 text-body-sm text-charcoal-500">
              <div>
                <p className="font-semibold text-charcoal-900">AI-Powered</p>
                <p>Style Assistant</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal-900">For Everyone</p>
                <p>Men & Women</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal-900">Works With</p>
                <p>Your Wardrobe</p>
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-charcoal-900/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-charcoal-900/30 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
