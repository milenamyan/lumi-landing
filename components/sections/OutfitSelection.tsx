'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export function OutfitSelection() {
  const occasions = [
    {
      title: 'Today',
      description: 'Perfect for current weather and your daily routine',
      icon: '☀️',
      items: ['Casual shirt', 'Comfortable jeans', 'Sneakers'],
    },
    {
      title: 'Meeting',
      description: 'Professional yet personal, matched to your style',
      icon: '💼',
      items: ['Blazer', 'Dress shirt', 'Smart shoes'],
    },
    {
      title: 'Evening',
      description: 'Elevated combinations for special occasions',
      icon: '🌙',
      items: ['Stylish top', 'Dark jeans', 'Elegant shoes'],
    },
    {
      title: 'Weekend',
      description: 'Relaxed but put-together looks',
      icon: '🎨',
      items: ['Cozy sweater', 'Relaxed pants', 'Comfortable boots'],
    },
  ]

  const features = [
    'Works with your real clothes, not abstract examples',
    'Considers weather, occasion, mood, and style',
    'Brings forgotten items back into rotation',
    'Shows new combinations within existing wardrobe',
    'Explains why an outfit works',
    'Respects your personal style preferences',
  ]

  return (
    <Section id="outfit-selection" className="bg-cream-50">
      <SectionHeader
        subtitle="AI-Powered Selection"
        title="LUMI and Outfit Selection"
        description="LUMI suggests outfits from your real clothes and helps you look better without needing to buy new items."
        centered
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
        {occasions.map((occasion, index) => (
          <Card 
            key={occasion.title}
            className="text-center animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-5xl mb-4">{occasion.icon}</div>
            <h3 className="text-h4 mb-2">{occasion.title}</h3>
            <p className="text-body-sm text-charcoal-500 mb-4">{occasion.description}</p>
            <div className="space-y-2">
              {occasion.items.map((item) => (
                <div key={item} className="text-body-sm bg-cream-100 rounded-lg py-2 px-3">
                  {item}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-cream-100 to-cream-200 p-8 md:p-12">
        <h3 className="text-h2 mb-8 text-center">How LUMI Helps You</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-terracotta-500 flex items-center justify-center text-cream-50 text-body-sm font-bold">
                ✓
              </div>
              <p className="text-body text-charcoal-900">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
