'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export function MediaCharacter() {
  const contentTypes = [
    {
      type: 'Episodes',
      description: 'Short stories about LUMI&apos;s adventures in fashion',
      icon: '🎬',
    },
    {
      type: 'Reactions',
      description: 'LUMI responds to trending fashion moments',
      icon: '😹',
    },
    {
      type: 'Tips',
      description: 'Quick style advice in bite-sized formats',
      icon: '💡',
    },
    {
      type: 'Behind Scenes',
      description: 'How LUMI thinks about outfits and style',
      icon: '🎭',
    },
  ]

  return (
    <Section id="media-character" className="bg-cream-50">
      <SectionHeader
        subtitle="Beyond the App"
        title="LUMI as a Media Character"
        description="LUMI lives beyond SIMPLARA — in short episodes, memes, Reels, and relatable fashion content. Follow his journey and be part of the community."
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
          <h3 className="text-h2 mb-4">Follow @itslumicat</h3>
          <p className="text-body-lg text-charcoal-500 mb-8">
            Join thousands of fashion enthusiasts following LUMI&apos;s daily adventures. 
            Get style tips, laugh at relatable moments, and be first to know about SIMPLARA updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Instagram
            </Button>
            <Button variant="secondary" size="lg">
              TikTok
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Card className="text-center">
          <p className="text-display-3 font-bold text-terracotta-500 mb-2">50K+</p>
          <p className="text-body text-charcoal-500">Followers</p>
        </Card>
        <Card className="text-center">
          <p className="text-display-3 font-bold text-terracotta-500 mb-2">200+</p>
          <p className="text-body text-charcoal-500">Episodes</p>
        </Card>
        <Card className="text-center">
          <p className="text-display-3 font-bold text-terracotta-500 mb-2">10M+</p>
          <p className="text-body text-charcoal-500">Views</p>
        </Card>
      </div>
    </Section>
  )
}
