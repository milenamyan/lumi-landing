'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export function ImproveLumiLife() {
  const actions = [
    {
      action: 'Upload Clothes',
      reward: 'LUMI learns your style and can create better outfit suggestions',
      lumens: '+10',
      icon: '👔',
    },
    {
      action: 'Create Outfits',
      reward: 'LUMI reacts to your creativity and helps refine your combinations',
      lumens: '+15',
      icon: '✏️',
    },
    {
      action: 'Save Looks',
      reward: 'Successful outfits improve recommendation quality',
      lumens: '+20',
      icon: '⭐',
    },
    {
      action: 'Vote in Battles',
      reward: 'Participate socially and earn rewards to upgrade LUMI&apos;s space',
      lumens: '+5',
      icon: '🗳️',
    },
    {
      action: 'Join Battles',
      reward: 'LUMI helps you prepare and analyzes results',
      lumens: '+30',
      icon: '⚔️',
    },
    {
      action: 'Earn Lumens',
      reward: 'Buy room items, décor, customization, and special LUMI states',
      lumens: 'Spend',
      icon: '💎',
    },
  ]

  return (
    <Section id="improve-lumi" className="bg-cream-100">
      <SectionHeader
        subtitle="The Game Loop"
        title="How to Improve LUMI's Life"
        description="You don't upgrade an abstract profile — you improve the life of a character. The more actively you work with your style, the better LUMI's world becomes."
        centered
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {actions.map((item, index) => (
          <Card 
            key={item.action}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{item.icon}</div>
              <div className="rounded-full bg-terracotta-500/10 px-3 py-1 text-body-sm font-semibold text-terracotta-500">
                {item.lumens} Lumens
              </div>
            </div>
            <h3 className="text-h4 mb-2">{item.action}</h3>
            <p className="text-body-sm text-charcoal-500">{item.reward}</p>
          </Card>
        ))}
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-terracotta-500/10 to-charcoal-900/5 p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div>
            <div className="text-display-3 font-bold text-charcoal-900 mb-2">💰</div>
            <h4 className="text-h4 mb-2">Earn Lumens</h4>
            <p className="text-body-sm text-charcoal-500">
              Complete actions to earn the in-app currency
            </p>
          </div>
          <div>
            <div className="text-display-3 font-bold text-charcoal-900 mb-2">🛋️</div>
            <h4 className="text-h4 mb-2">Upgrade Space</h4>
            <p className="text-body-sm text-charcoal-500">
              Buy furniture, décor, and items for LUMI&apos;s room
            </p>
          </div>
          <div>
            <div className="text-display-3 font-bold text-charcoal-900 mb-2">📈</div>
            <h4 className="text-h4 mb-2">See Progress</h4>
            <p className="text-body-sm text-charcoal-500">
              Watch LUMI&apos;s world evolve as your fashion journey grows
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
