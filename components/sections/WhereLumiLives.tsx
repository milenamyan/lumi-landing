'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export function WhereLumiLives() {
  const stages = [
    {
      stage: 'Starting Space',
      title: 'Humble Beginnings',
      description: 'LUMI starts in a simple box or basic space. It&apos;s cozy but minimal.',
      icon: '📦',
    },
    {
      stage: 'Basic Room',
      title: 'First Home',
      description: 'As you upload clothes and create outfits, LUMI gets his first real room with essential furniture.',
      icon: '🏠',
    },
    {
      stage: 'Stylish Room',
      title: 'Growing World',
      description: 'Your fashion progress reflects in LUMI&apos;s space. Better décor, more personality, enhanced ambiance.',
      icon: '✨',
    },
    {
      stage: 'LUMI Home',
      title: 'Complete Haven',
      description: 'The ultimate space that showcases your fashion journey. A fully developed world that grows with your style.',
      icon: '🏡',
    },
  ]

  return (
    <Section id="where-lumi-lives" className="bg-cream-50">
      <SectionHeader
        subtitle="LUMI&apos;s World"
        title="Where LUMI Lives"
        description="LUMI starts in a simple space and gradually develops a room or a home. His world reflects your activity and fashion progress."
        centered
      />

      <div className="relative">
        {/* Evolution Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cream-300 via-terracotta-500/30 to-charcoal-900/30 -translate-y-1/2"></div>

        {/* Stages */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10">
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

      <div className="mt-16 text-center max-w-3xl mx-auto">
        <p className="text-body-lg text-charcoal-500">
          LUMI&apos;s space is a living representation of your fashion journey. Every action you take 
          in SIMPLARA contributes to building his world — making it richer, more personalized, 
          and more meaningful.
        </p>
      </div>
    </Section>
  )
}
