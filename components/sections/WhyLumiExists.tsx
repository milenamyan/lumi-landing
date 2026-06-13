'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { FeatureCard } from '@/components/ui/Card'

export function WhyLumiExists() {
  const benefits = [
    {
      title: 'Simpler Mornings',
      description: 'Open the app, get an outfit suggestion, and start your day with confidence. No more standing in front of the closet wondering what to wear.',
    },
    {
      title: 'Warmer Decisions',
      description: 'LUMI makes style choices feel personal and supported, not algorithmic or cold. Fashion becomes a conversation, not a calculation.',
    },
    {
      title: 'Better Combinations',
      description: 'Discover new ways to wear what you already own. LUMI helps you see potential in forgotten pieces and creates fresh looks from familiar items.',
    },
    {
      title: 'Feeling of Progress',
      description: 'Watch your style evolve and LUMI&apos;s world grow. Every outfit you create, every battle you join contributes to a living fashion journey.',
    },
  ]

  return (
    <Section id="why-lumi" className="bg-cream-100">
      <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
        <div>
          <SectionHeader
            subtitle="The Everyday Value"
            title="Why LUMI Exists"
            description="LUMI makes outfit selection simpler, warmer, and more habitual."
          />
        </div>
        <div className="rounded-3xl bg-cream-200 p-12 text-center">
          <p className="text-display-3 mb-4">🌅</p>
          <h3 className="text-h3 mb-3">Morning Scenario</h3>
          <p className="text-body text-charcoal-500">
            Wake up → Open SIMPLARA → See LUMI&apos;s suggestion → Get dressed with confidence → 
            Start your day looking great
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <FeatureCard
            key={benefit.title}
            title={benefit.title}
            description={benefit.description}
            className="animate-slide-up"
          />
        ))}
      </div>
    </Section>
  )
}
