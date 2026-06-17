'use client'

import Image from 'next/image'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getSimplaraUrl } from '@/lib/simplara'

export function Waitlist() {
  const { t, language } = useLanguage()
  const simplaraUrl = getSimplaraUrl(language)

  return (
    <Section id="waitlist" className="bg-gradient-to-br from-terracotta-500/10 to-charcoal-900/5">
      <SectionHeader
        subtitle={t.waitlist.subtitle}
        title={t.waitlist.title}
        description={t.waitlist.description}
        centered
      />

      <div className="max-w-2xl mx-auto text-center">
        <div className="rounded-3xl bg-cream-50 border border-cream-400 p-8 md:p-10">
          <a
            href={simplaraUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center mb-6 hover:opacity-80 transition-opacity"
            aria-label="Visit SIMPLARA"
          >
            <Image
              src="/assets/simplara-logo.png"
              alt="SIMPLARA"
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
            />
          </a>
          <p className="text-body-lg text-charcoal-500 mb-8">
            {t.waitlist.ctaDescription}
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open(simplaraUrl, '_blank', 'noopener,noreferrer')}
          >
            {t.waitlist.ctaButton}
          </Button>
          <p className="text-body-sm text-charcoal-500 mt-6">
            {t.waitlist.noteText}
          </p>
        </div>
      </div>
    </Section>
  )
}
