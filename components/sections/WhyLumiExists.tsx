'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { FeatureCard } from '@/components/ui/Card'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function WhyLumiExists() {
  const { t } = useLanguage()

  const benefits = [
    {
      title: t.whyLumi.simplerTitle,
      description: t.whyLumi.simplerDesc,
    },
    {
      title: t.whyLumi.warmerTitle,
      description: t.whyLumi.warmerDesc,
    },
    {
      title: t.whyLumi.betterTitle,
      description: t.whyLumi.betterDesc,
    },
    {
      title: t.whyLumi.progressTitle,
      description: t.whyLumi.progressDesc,
    },
  ]

  return (
    <Section id="why-lumi" className="bg-cream-100">
      <div className="grid gap-8 lg:grid-cols-2 items-center mb-10">
        <div>
          <SectionHeader
            subtitle={t.whyLumi.subtitle}
            title={t.whyLumi.title}
            description={t.whyLumi.description}
          />
        </div>
        <div className="rounded-3xl bg-cream-200 p-8 text-center">
          <p className="text-display-3 mb-4">🌅</p>
          <h3 className="text-h3 mb-3">{t.whyLumi.morningTitle}</h3>
          <p className="text-body text-charcoal-500">
            {t.whyLumi.morningScenario}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <FeatureCard
            key={benefit.title}
            title={benefit.title}
            description={benefit.description}
            className="animate-slide-up"
          />
        ))}
      </div>
    </Section>
  )
}
