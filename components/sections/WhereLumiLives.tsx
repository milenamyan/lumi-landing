'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function WhereLumiLives() {
  const { t } = useLanguage()

  const stages = [
    {
      stage: t.whereLumi.startingSpace,
      title: t.whereLumi.startingTitle,
      description: t.whereLumi.startingDesc,
      icon: '📦',
    },
    {
      stage: t.whereLumi.basicRoom,
      title: t.whereLumi.basicTitle,
      description: t.whereLumi.basicDesc,
      icon: '🏠',
    },
    {
      stage: t.whereLumi.stylishRoom,
      title: t.whereLumi.stylishTitle,
      description: t.whereLumi.stylishDesc,
      icon: '✨',
    },
    {
      stage: t.whereLumi.lumiHome,
      title: t.whereLumi.lumiHomeTitle,
      description: t.whereLumi.lumiHomeDesc,
      icon: '🏡',
    },
  ]

  return (
    <Section id="where-lumi-lives" className="bg-cream-50">
      <SectionHeader
        subtitle={t.whereLumi.subtitle}
        title={t.whereLumi.title}
        description={t.whereLumi.description}
        centered
      />

      <div className="relative">
        {/* Evolution Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cream-300 via-terracotta-500/30 to-charcoal-900/30 -translate-y-1/2"></div>

        {/* Stages */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {stages.map((item, index) => (
            <Card 
              key={item.stage}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-6xl mb-4">{item.icon}</div>
              <p className="text-body-sm font-semibold uppercase tracking-wider text-terracotta-500 mb-2">
                {item.stage}
              </p>
              <h3 className="text-h4 mb-3">{item.title}</h3>
              <p className="text-body-sm text-charcoal-500">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center max-w-3xl mx-auto">
        <p className="text-body-lg text-charcoal-500">
          {t.whereLumi.footerText}
        </p>
      </div>
    </Section>
  )
}
