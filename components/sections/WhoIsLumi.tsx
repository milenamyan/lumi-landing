'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export function WhoIsLumi() {
  const emotions = [
    { state: 'Joy', description: 'When you create a great outfit', emoji: '😊' },
    { state: 'Surprise', description: 'When you try new combinations', emoji: '😮' },
    { state: 'Care', description: 'When giving style advice', emoji: '🥰' },
    { state: 'Excitement', description: 'When you win fashion battles', emoji: '🎉' },
  ]

  return (
    <Section id="who-is-lumi" className="bg-cream-50">
      <SectionHeader
        subtitle="Meet Your Companion"
        title="Who is LUMI?"
        description="LUMI is not a toy or decorative character. He is an AI cat assistant, the emotional interface of SIMPLARA, and a guide between you, your wardrobe, and the AI logic of the product."
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

      <div className="mt-16 rounded-3xl bg-gradient-to-br from-terracotta-500/10 to-charcoal-900/5 p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-h2 mb-4">An Emotional AI Interface</h3>
          <p className="text-body-lg text-charcoal-500">
            LUMI makes fashion decisions feel warmer and more personal. He transforms complex AI 
            recommendations into friendly guidance, turning your wardrobe management into an engaging, 
            living experience.
          </p>
        </div>
      </div>
    </Section>
  )
}
