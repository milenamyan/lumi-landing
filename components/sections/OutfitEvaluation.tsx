'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export function OutfitEvaluation() {
  const criteria = [
    {
      title: 'Color Harmony',
      description: 'How well colors and textures work together',
      icon: '🎨',
    },
    {
      title: 'Occasion Relevance',
      description: 'Appropriateness for the event or task',
      icon: '🎯',
    },
    {
      title: 'Seasonal Fit',
      description: 'Weather and season considerations',
      icon: '🌤️',
    },
    {
      title: 'Balance',
      description: 'Proportion of top, bottom, shoes, accessories',
      icon: '⚖️',
    },
    {
      title: 'Wardrobe Usage',
      description: 'How well you&apos;re using existing pieces',
      icon: '📊',
    },
    {
      title: 'Improvement Tips',
      description: 'Suggestions to strengthen the outfit',
      icon: '💡',
    },
  ]

  return (
    <Section id="outfit-evaluation" className="bg-cream-100">
      <SectionHeader
        subtitle="Private & Useful Feedback"
        title="Outfit Evaluation in the Room"
        description="Inside the room, LUMI evaluates the outfit composition, not the person. The feedback is soft, helpful, and designed to build your confidence."
        centered
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {criteria.map((item, index) => (
          <Card 
            key={item.title}
            className="text-center animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-h4 mb-2">{item.title}</h3>
            <p className="text-body-sm text-charcoal-500">{item.description}</p>
          </Card>
        ))}
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="bg-gradient-to-br from-terracotta-500/5 to-cream-50">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-terracotta-500 flex items-center justify-center text-cream-50 text-h4">
              ✓
            </div>
            <div>
              <h4 className="text-h4 mb-2">Strong Point of the Outfit</h4>
              <p className="text-body text-charcoal-500">
                &quot;The color palette is cohesive and sophisticated. The navy and cream combination 
                creates a clean, professional look.&quot;
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-charcoal-900/5 to-cream-50">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-charcoal-900 flex items-center justify-center text-cream-50 text-h4">
              💡
            </div>
            <div>
              <h4 className="text-h4 mb-2">What Can Be Improved</h4>
              <p className="text-body text-charcoal-500">
                &quot;Consider adding a statement accessory to elevate the look. A leather belt or 
                watch would add visual interest.&quot;
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-cream-200 to-cream-50">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cream-400 flex items-center justify-center text-charcoal-900 text-h4">
              🔄
            </div>
            <div>
              <h4 className="text-h4 mb-2">Try Replacing This</h4>
              <p className="text-body text-charcoal-500">
                &quot;The sneakers work, but brown leather shoes from your wardrobe would match 
                the belt and create a more polished ensemble.&quot;
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-12 text-center max-w-3xl mx-auto">
        <p className="text-h4 text-charcoal-900 mb-4">
          &quot;LUMI does not set beauty standards. LUMI helps reveal your style.&quot;
        </p>
        <p className="text-body text-charcoal-500">
          Evaluation is private, constructive, and focused on helping you use your wardrobe 
          with more confidence. LUMI never judges your appearance — only outfit composition.
        </p>
      </div>
    </Section>
  )
}
