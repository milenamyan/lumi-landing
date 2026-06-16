'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const instagramUrl = 'https://www.instagram.com/itslumicat?igsh=MTRid243ZWJ2ZWIwdQ=='
const tiktokUrl = 'https://www.tiktok.com/@itslumi.cat?_r=1&_t=ZS-97ENKXEzIxd'

export function MediaCharacter() {
  const { t } = useLanguage()

  const contentTypes = [
    {
      type: t.mediaCharacter.episodes,
      description: t.mediaCharacter.episodesDesc,
      icon: '🎬',
    },
    {
      type: t.mediaCharacter.reactions,
      description: t.mediaCharacter.reactionsDesc,
      icon: '😹',
    },
    {
      type: t.mediaCharacter.tips,
      description: t.mediaCharacter.tipsDesc,
      icon: '💡',
    },
    {
      type: t.mediaCharacter.behindScenes,
      description: t.mediaCharacter.behindScenesDesc,
      icon: '🎭',
    },
  ]

  return (
    <Section id="media-character" className="bg-cream-50">
      <SectionHeader
        subtitle={t.mediaCharacter.subtitle}
        title={t.mediaCharacter.title}
        description={t.mediaCharacter.description}
        centered
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {contentTypes.map((content, index) => (
          <Card 
            key={content.type}
            className="text-center animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-5xl mb-4">{content.icon}</div>
            <h3 className="text-h4 mb-2">{content.type}</h3>
            <p className="text-body-sm text-charcoal-500">{content.description}</p>
          </Card>
        ))}
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-terracotta-500/10 to-charcoal-900/5 p-6 md:p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-6xl mb-6">📱</div>
          <h3 className="text-h2 mb-4">{t.mediaCharacter.followTitle}</h3>
          <p className="text-body-lg text-charcoal-500 mb-8">
            {t.mediaCharacter.followDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open(instagramUrl, '_blank', 'noopener,noreferrer')}
            >
              {t.mediaCharacter.instagram}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.open(tiktokUrl, '_blank', 'noopener,noreferrer')}
            >
              {t.mediaCharacter.tiktok}
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Card className="text-center">
          <p className="text-display-3 font-bold text-terracotta-500 mb-2">50K+</p>
          <p className="text-body text-charcoal-500">{t.mediaCharacter.followers}</p>
        </Card>
        <Card className="text-center">
          <p className="text-display-3 font-bold text-terracotta-500 mb-2">200+</p>
          <p className="text-body text-charcoal-500">{t.mediaCharacter.episodesCount}</p>
        </Card>
        <Card className="text-center">
          <p className="text-display-3 font-bold text-terracotta-500 mb-2">10M+</p>
          <p className="text-body text-charcoal-500">{t.mediaCharacter.views}</p>
        </Card>
      </div>
    </Section>
  )
}
