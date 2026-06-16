'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function WhoIsLumi() {
  const { t } = useLanguage()

  const emotions = [
    { state: t.whoIsLumi.joy, description: t.whoIsLumi.joyDesc, emoji: '😊' },
    { state: t.whoIsLumi.surprise, description: t.whoIsLumi.surpriseDesc, emoji: '😮' },
    { state: t.whoIsLumi.care, description: t.whoIsLumi.careDesc, emoji: '🥰' },
    { state: t.whoIsLumi.excitement, description: t.whoIsLumi.excitementDesc, emoji: '🎉' },
  ]

  return (
    <Section id="who-is-lumi" className="bg-cream-50">
      <SectionHeader
        subtitle={t.whoIsLumi.subtitle}
        title={t.whoIsLumi.title}
        description={t.whoIsLumi.description}
        centered
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {emotions.map((emotion, index) => (
          <Card 
            key={emotion.state}
            className="text-center animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-6xl mb-4">{emotion.emoji}</div>
            <h3 className="text-h4 mb-2">{emotion.state}</h3>
            <p className="text-body-sm text-charcoal-500">{emotion.description}</p>
          </Card>
        ))}
      </div>

      <div className="mt-10 rounded-3xl bg-gradient-to-br from-terracotta-500/10 to-charcoal-900/5 p-6 md:p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-h2 mb-4">{t.whoIsLumi.emotionalTitle}</h3>
          <p className="text-body-lg text-charcoal-500">
            {t.whoIsLumi.emotionalDesc}
          </p>
        </div>
      </div>
    </Section>
  )
}
