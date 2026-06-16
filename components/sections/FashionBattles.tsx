'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function FashionBattles() {
  const { t } = useLanguage()

  const battlePhases = [
    {
      phase: t.fashionBattles.beforeBattle,
      title: t.fashionBattles.preparation,
      description: t.fashionBattles.preparationDesc,
      icon: '🎯',
    },
    {
      phase: t.fashionBattles.duringBattle,
      title: t.fashionBattles.aiEvaluation,
      description: t.fashionBattles.aiEvaluationDesc,
      icon: '⚔️',
    },
    {
      phase: t.fashionBattles.afterBattle,
      title: t.fashionBattles.feedback,
      description: t.fashionBattles.feedbackDesc,
      icon: '📊',
    },
  ]

  return (
    <Section id="fashion-battles" className="bg-cream-50">
      <SectionHeader
        subtitle={t.fashionBattles.subtitle}
        title={t.fashionBattles.title}
        description={t.fashionBattles.description}
        centered
      />

      <div className="grid gap-6 md:grid-cols-3 mb-10">
        {battlePhases.map((phase, index) => (
          <Card 
            key={phase.phase}
            className="text-center animate-slide-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="text-6xl mb-4">{phase.icon}</div>
            <p className="text-body-sm font-semibold uppercase tracking-wider text-terracotta-500 mb-2">
              {phase.phase}
            </p>
            <h3 className="text-h3 mb-3">{phase.title}</h3>
            <p className="text-body text-charcoal-500">{phase.description}</p>
          </Card>
        ))}
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-charcoal-900/5 to-cream-100 p-6 md:p-8">
        <h3 className="text-h2 mb-6 text-center">{t.fashionBattles.battleResultLayers}</h3>
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-terracotta-500 flex items-center justify-center text-cream-50 text-h3 mx-auto mb-4">
              1
            </div>
            <h4 className="text-h4 mb-2">{t.fashionBattles.userVoting}</h4>
            <p className="text-body-sm text-charcoal-500">
              {t.fashionBattles.userVotingDesc}
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-charcoal-900 flex items-center justify-center text-cream-50 text-h3 mx-auto mb-4">
              2
            </div>
            <h4 className="text-h4 mb-2">{t.fashionBattles.lumiAI}</h4>
            <p className="text-body-sm text-charcoal-500">
              {t.fashionBattles.lumiAIDesc}
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-cream-400 flex items-center justify-center text-charcoal-900 text-h3 mx-auto mb-4">
              3
            </div>
            <h4 className="text-h4 mb-2">{t.fashionBattles.lumenStake}</h4>
            <p className="text-body-sm text-charcoal-500">
              {t.fashionBattles.lumenStakeDesc}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 max-w-3xl mx-auto space-y-4">
        <Card className="bg-gradient-to-br from-terracotta-500/10 to-cream-50">
          <h4 className="text-h4 mb-2">{t.fashionBattles.forWinners}</h4>
          <p className="text-body text-charcoal-500">
            {t.fashionBattles.winnersExample}
          </p>
        </Card>
        <Card className="bg-gradient-to-br from-charcoal-900/5 to-cream-50">
          <h4 className="text-h4 mb-2">{t.fashionBattles.forParticipants}</h4>
          <p className="text-body text-charcoal-500">
            {t.fashionBattles.participantsExample}
          </p>
        </Card>
      </div>
    </Section>
  )
}
