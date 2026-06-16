'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function NotPayToWin() {
  const { t } = useLanguage()

  const fairnessPoints = [
    {
      title: t.notPayToWin.votingMatters,
      description: t.notPayToWin.votingDesc,
      icon: '🗳️',
    },
    {
      title: t.notPayToWin.lumiTransparent,
      description: t.notPayToWin.lumiTransparentDesc,
      icon: '🔍',
    },
    {
      title: t.notPayToWin.roomCosmetic,
      description: t.notPayToWin.roomCosmeticDesc,
      icon: '🏠',
    },
    {
      title: t.notPayToWin.styleAbove,
      description: t.notPayToWin.styleAboveDesc,
      icon: '⭐',
    },
  ]

  return (
    <Section id="not-pay-to-win" className="bg-cream-100">
      <SectionHeader
        subtitle={t.notPayToWin.subtitle}
        title={t.notPayToWin.title}
        description={t.notPayToWin.description}
        centered
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
        {fairnessPoints.map((point, index) => (
          <Card 
            key={point.title}
            className="text-center animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-5xl mb-4">{point.icon}</div>
            <h3 className="text-h4 mb-2">{point.title}</h3>
            <p className="text-body-sm text-charcoal-500">{point.description}</p>
          </Card>
        ))}
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-terracotta-500/10 to-charcoal-900/5 p-6 md:p-8">
        <h3 className="text-h2 mb-6 text-center">{t.notPayToWin.fairnessFormula}</h3>
        <div className="flex flex-col items-stretch gap-2 text-center max-w-4xl mx-auto md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-4">
          <div className="w-full md:flex-1 md:min-w-[200px]">
            <div className="rounded-2xl bg-cream-50 p-6">
              <p className="text-h3 mb-2">{t.notPayToWin.yourStyle}</p>
              <p className="text-body-sm text-charcoal-500">{t.notPayToWin.yourStyleDesc}</p>
            </div>
          </div>
          <div className="flex w-full items-center justify-center py-1 text-h2 text-charcoal-500 md:w-auto md:py-0">+</div>
          <div className="w-full md:flex-1 md:min-w-[200px]">
            <div className="rounded-2xl bg-cream-50 p-6">
              <p className="text-h3 mb-2">{t.notPayToWin.userVotes}</p>
              <p className="text-body-sm text-charcoal-500">{t.notPayToWin.userVotesDesc}</p>
            </div>
          </div>
          <div className="flex w-full items-center justify-center py-1 text-h2 text-charcoal-500 md:w-auto md:py-0">+</div>
          <div className="w-full md:flex-1 md:min-w-[200px]">
            <div className="rounded-2xl bg-cream-50 p-6">
              <p className="text-h3 mb-2">{t.notPayToWin.aiAnalysis}</p>
              <p className="text-body-sm text-charcoal-500">{t.notPayToWin.aiAnalysisDesc}</p>
            </div>
          </div>
          <div className="flex w-full items-center justify-center py-1 text-h2 text-charcoal-500 md:w-auto md:py-0">=</div>
          <div className="w-full md:flex-1 md:min-w-[200px]">
            <div className="rounded-2xl bg-terracotta-500 p-6">
              <p className="text-h3 mb-2 text-cream-50">{t.notPayToWin.fairResult}</p>
              <p className="text-body-sm text-cream-50">{t.notPayToWin.fairResultDesc}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center max-w-3xl mx-auto">
        <p className="text-body-lg text-charcoal-500">
          {t.notPayToWin.footerText}
        </p>
      </div>
    </Section>
  )
}
