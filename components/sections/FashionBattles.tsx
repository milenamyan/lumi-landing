'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export function FashionBattles() {
  const battlePhases = [
    {
      phase: 'Before Battle',
      title: 'Preparation',
      description: 'LUMI helps you choose a stronger outfit and gives preliminary advice',
      icon: '🎯',
    },
    {
      phase: 'During Battle',
      title: 'AI Evaluation',
      description: 'LUMI&apos;s analysis becomes part of the result alongside user voting',
      icon: '⚔️',
    },
    {
      phase: 'After Battle',
      title: 'Feedback',
      description: 'Win or lose, LUMI explains what worked and what can be improved',
      icon: '📊',
    },
  ]

  return (
    <Section id="fashion-battles" className="bg-cream-50">
      <SectionHeader
        subtitle="Competitive Fashion"
        title="LUMI in Fashion Battles"
        description="In battles, LUMI acts as your assistant, analyst, and explainable AI judge. He helps you compete fairly and learn from every match."
        centered
      />

      <div className="grid gap-8 md:grid-cols-3 mb-16">
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

      <div className="rounded-3xl bg-gradient-to-br from-charcoal-900/5 to-cream-100 p-8 md:p-12">
        <h3 className="text-h2 mb-8 text-center">Battle Result Layers</h3>
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-terracotta-500 flex items-center justify-center text-cream-50 text-h3 mx-auto mb-4">
              1
            </div>
            <h4 className="text-h4 mb-2">User Voting</h4>
            <p className="text-body-sm text-charcoal-500">
              The main layer — real people decide which outfit they prefer
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-charcoal-900 flex items-center justify-center text-cream-50 text-h3 mx-auto mb-4">
              2
            </div>
            <h4 className="text-h4 mb-2">LUMI AI Evaluation</h4>
            <p className="text-body-sm text-charcoal-500">
              Analytical layer that explains style strength and harmony
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-cream-400 flex items-center justify-center text-charcoal-900 text-h3 mx-auto mb-4">
              3
            </div>
            <h4 className="text-h4 mb-2">Lumen Stake</h4>
            <p className="text-body-sm text-charcoal-500">
              Optional game-risk layer that adds excitement
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 max-w-3xl mx-auto space-y-4">
        <Card className="bg-gradient-to-br from-terracotta-500/10 to-cream-50">
          <h4 className="text-h4 mb-2">For Winners</h4>
          <p className="text-body text-charcoal-500">
            &quot;Your outfit won because of strong color harmony and great occasion fit. 
            The community loved the confident styling choices!&quot;
          </p>
        </Card>
        <Card className="bg-gradient-to-br from-charcoal-900/5 to-cream-50">
          <h4 className="text-h4 mb-2">For Participants</h4>
          <p className="text-body text-charcoal-500">
            &quot;Great effort! Your outfit had solid fundamentals. Next time, try adding a 
            focal point accessory to make the look more memorable.&quot;
          </p>
        </Card>
      </div>
    </Section>
  )
}
