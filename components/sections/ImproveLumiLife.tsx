'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function ImproveLumiLife() {
  const { t } = useLanguage()

  const actions = [
    {
      action: t.improveLumi.uploadClothes,
      reward: t.improveLumi.uploadReward,
      lumens: '+10',
      icon: '👔',
    },
    {
      action: t.improveLumi.createOutfits,
      reward: t.improveLumi.createReward,
      lumens: '+15',
      icon: '✏️',
    },
    {
      action: t.improveLumi.saveLooks,
      reward: t.improveLumi.saveReward,
      lumens: '+20',
      icon: '⭐',
    },
    {
      action: t.improveLumi.voteInBattles,
      reward: t.improveLumi.voteReward,
      lumens: '+5',
      icon: '🗳️',
    },
    {
      action: t.improveLumi.joinBattles,
      reward: t.improveLumi.joinReward,
      lumens: '+30',
      icon: '⚔️',
    },
    {
      action: t.improveLumi.earnLumens,
      reward: t.improveLumi.earnReward,
      lumens: t.improveLumi.spend,
      icon: '💎',
    },
  ]

  return (
    <Section id="improve-lumi" className="bg-cream-100">
      <SectionHeader
        subtitle={t.improveLumi.subtitle}
        title={t.improveLumi.title}
        description={t.improveLumi.description}
        centered
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {actions.map((item, index) => (
          <Card 
            key={item.action}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{item.icon}</div>
              <div className="rounded-full bg-terracotta-500/10 px-3 py-1 text-body-sm font-semibold text-terracotta-500">
                {item.lumens} {t.improveLumi.lumens}
              </div>
            </div>
            <h3 className="text-h4 mb-2">{item.action}</h3>
            <p className="text-body-sm text-charcoal-500">{item.reward}</p>
          </Card>
        ))}
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-terracotta-500/10 to-charcoal-900/5 p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-3 text-center">
          <div>
            <div className="text-display-3 font-bold text-charcoal-900 mb-2">💰</div>
            <h4 className="text-h4 mb-2">{t.improveLumi.earnTitle}</h4>
            <p className="text-body-sm text-charcoal-500">
              {t.improveLumi.earnDesc}
            </p>
          </div>
          <div>
            <div className="text-display-3 font-bold text-charcoal-900 mb-2">🛋️</div>
            <h4 className="text-h4 mb-2">{t.improveLumi.upgradeTitle}</h4>
            <p className="text-body-sm text-charcoal-500">
              {t.improveLumi.upgradeDesc}
            </p>
          </div>
          <div>
            <div className="text-display-3 font-bold text-charcoal-900 mb-2">📈</div>
            <h4 className="text-h4 mb-2">{t.improveLumi.progressTitle}</h4>
            <p className="text-body-sm text-charcoal-500">
              {t.improveLumi.progressDesc}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
