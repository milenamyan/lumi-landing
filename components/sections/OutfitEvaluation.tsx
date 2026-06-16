'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function OutfitEvaluation() {
  const { t } = useLanguage()

  const criteria = [
    {
      title: t.outfitEvaluation.colorHarmony,
      description: t.outfitEvaluation.colorDesc,
      icon: '🎨',
    },
    {
      title: t.outfitEvaluation.occasionRelevance,
      description: t.outfitEvaluation.occasionDesc,
      icon: '🎯',
    },
    {
      title: t.outfitEvaluation.seasonalFit,
      description: t.outfitEvaluation.seasonalDesc,
      icon: '🌤️',
    },
    {
      title: t.outfitEvaluation.balance,
      description: t.outfitEvaluation.balanceDesc,
      icon: '⚖️',
    },
    {
      title: t.outfitEvaluation.wardrobeUsage,
      description: t.outfitEvaluation.wardrobeDesc,
      icon: '📊',
    },
    {
      title: t.outfitEvaluation.improvementTips,
      description: t.outfitEvaluation.improvementDesc,
      icon: '💡',
    },
  ]

  return (
    <Section id="outfit-evaluation" className="bg-cream-100">
      <SectionHeader
        subtitle={t.outfitEvaluation.subtitle}
        title={t.outfitEvaluation.title}
        description={t.outfitEvaluation.description}
        centered
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {criteria.map((item, index) => (
          <Card 
            key={item.title}
            className="text-center animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-h4 mb-2">{item.title}</h3>
            <p className="text-body-sm text-charcoal-500">{item.description}</p>
          </Card>
        ))}
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="bg-gradient-to-br from-terracotta-500/5 to-cream-50">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-terracotta-500 flex items-center justify-center text-cream-50 text-h4">
              ✓
            </div>
            <div>
              <h4 className="text-h4 mb-2">{t.outfitEvaluation.strongPoint}</h4>
              <p className="text-body text-charcoal-500">
                {t.outfitEvaluation.strongExample}
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-charcoal-900/5 to-cream-50">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-charcoal-900 flex items-center justify-center text-cream-50 text-h4">
              💡
            </div>
            <div>
              <h4 className="text-h4 mb-2">{t.outfitEvaluation.improvement}</h4>
              <p className="text-body text-charcoal-500">
                {t.outfitEvaluation.improvementExample}
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-cream-200 to-cream-50">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cream-400 flex items-center justify-center text-charcoal-900 text-h4">
              🔄
            </div>
            <div>
              <h4 className="text-h4 mb-2">{t.outfitEvaluation.tryReplacing}</h4>
              <p className="text-body text-charcoal-500">
                {t.outfitEvaluation.tryReplacingExample}
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-8 text-center max-w-3xl mx-auto">
        <p className="text-h4 text-charcoal-900 mb-4">
          {t.outfitEvaluation.quote}
        </p>
        <p className="text-body text-charcoal-500">
          {t.outfitEvaluation.quoteDesc}
        </p>
      </div>
    </Section>
  )
}
