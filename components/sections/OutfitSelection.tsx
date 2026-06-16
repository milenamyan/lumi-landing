'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function OutfitSelection() {
  const { t } = useLanguage()

  const occasions = [
    {
      title: t.outfitSelection.today,
      description: t.outfitSelection.todayDesc,
      icon: '☀️',
      items: [t.outfitSelection.casualShirt, t.outfitSelection.comfortableJeans, t.outfitSelection.sneakers],
    },
    {
      title: t.outfitSelection.meeting,
      description: t.outfitSelection.meetingDesc,
      icon: '💼',
      items: [t.outfitSelection.blazer, t.outfitSelection.dressShirt, t.outfitSelection.smartShoes],
    },
    {
      title: t.outfitSelection.evening,
      description: t.outfitSelection.eveningDesc,
      icon: '🌙',
      items: [t.outfitSelection.stylishTop, t.outfitSelection.darkJeans, t.outfitSelection.elegantShoes],
    },
    {
      title: t.outfitSelection.weekend,
      description: t.outfitSelection.weekendDesc,
      icon: '🎨',
      items: [t.outfitSelection.cozySweater, t.outfitSelection.relaxedPants, t.outfitSelection.comfortableBoots],
    },
  ]

  const features = [
    t.outfitSelection.feature1,
    t.outfitSelection.feature2,
    t.outfitSelection.feature3,
    t.outfitSelection.feature4,
    t.outfitSelection.feature5,
    t.outfitSelection.feature6,
  ]

  return (
    <Section id="outfit-selection" className="bg-cream-50">
      <SectionHeader
        subtitle={t.outfitSelection.subtitle}
        title={t.outfitSelection.title}
        description={t.outfitSelection.description}
        centered
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
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

      <div className="rounded-3xl bg-gradient-to-br from-cream-100 to-cream-200 p-6 md:p-8">
        <h3 className="text-h2 mb-6 text-center">{t.outfitSelection.howLumiHelps}</h3>
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
