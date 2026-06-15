'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export function NotPayToWin() {
  const fairnessPoints = [
    {
      title: 'Voting Matters Most',
      description: 'Real users decide battle outcomes, not AI algorithms or paid advantages',
      icon: '🗳️',
    },
    {
      title: 'LUMI is Transparent',
      description: 'AI evaluation explains decisions and helps you learn, not manipulate results',
      icon: '🔍',
    },
    {
      title: 'Room Items are Cosmetic',
      description: 'Paid upgrades improve LUMI&apos;s space but don&apos;t give unfair battle advantages',
      icon: '🏠',
    },
    {
      title: 'Style Above All',
      description: 'Your outfit quality and creativity matter more than how much you spend',
      icon: '⭐',
    },
  ]

  return (
    <Section id="not-pay-to-win" className="bg-cream-100">
      <SectionHeader
        subtitle="Fair Competition"
        title="Why This is Not Pay-to-Win"
        description="LUMI helps you improve your outfit and provides transparent feedback. He doesn't guarantee victories or replace the community's voice."
        centered
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
        {fairnessPoints.map((point, index) => (
          <Card 
            key={point.title}
            className="text-center animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-5xl mb-4">{point.icon}</div>
            <h3 className="text-h4 mb-2">{point.title}</h3>
            <p className="text-body-sm text-charcoal-500">{point.description}</p>
          </Card>
        ))}
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-terracotta-500/10 to-charcoal-900/5 p-6 md:p-8">
        <h3 className="text-h2 mb-6 text-center">Fairness Formula</h3>
        <div className="flex flex-wrap items-center justify-center gap-4 text-center max-w-4xl mx-auto">
          <div className="flex-1 min-w-[200px]">
            <div className="rounded-2xl bg-cream-50 p-6">
              <p className="text-h3 mb-2">Your Style</p>
              <p className="text-body-sm text-charcoal-500">Real outfit quality</p>
            </div>
          </div>
          <div className="text-h2 text-charcoal-500">+</div>
          <div className="flex-1 min-w-[200px]">
            <div className="rounded-2xl bg-cream-50 p-6">
              <p className="text-h3 mb-2">User Votes</p>
              <p className="text-body-sm text-charcoal-500">Community decision</p>
            </div>
          </div>
          <div className="text-h2 text-charcoal-500">+</div>
          <div className="flex-1 min-w-[200px]">
            <div className="rounded-2xl bg-cream-50 p-6">
              <p className="text-h3 mb-2">AI Analysis</p>
              <p className="text-body-sm text-charcoal-500">Objective feedback</p>
            </div>
          </div>
          <div className="text-h2 text-charcoal-500">=</div>
          <div className="flex-1 min-w-[200px]">
            <div className="rounded-2xl bg-terracotta-500 p-6">
              <p className="text-h3 mb-2 text-cream-50">Fair Result</p>
              <p className="text-body-sm text-cream-50">Merit-based outcome</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center max-w-3xl mx-auto">
        <p className="text-body-lg text-charcoal-500">
          LUMI&apos;s role is to help you present your best self and understand what makes an outfit 
          strong. Success comes from your fashion sense and creativity, not from purchases or upgrades.
        </p>
      </div>
    </Section>
  )
}
