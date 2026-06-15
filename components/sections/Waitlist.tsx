'use client'

import { useState } from 'react'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export function Waitlist() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    interest: 'early-access',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <Section id="waitlist" className="bg-gradient-to-br from-terracotta-500/10 to-charcoal-900/5">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-display-3 mb-4">Welcome to LUMI&apos;s World!</h2>
          <p className="text-body-lg text-charcoal-500 mb-8">
            You&apos;re on the list! We&apos;ll send you early access details soon. 
            Follow @itslumicat to stay updated with LUMI&apos;s daily adventures.
          </p>
          <Button variant="secondary" onClick={() => setSubmitted(false)}>
            Submit Another Entry
          </Button>
        </div>
      </Section>
    )
  }

  return (
    <Section id="waitlist" className="bg-gradient-to-br from-terracotta-500/10 to-charcoal-900/5">
      <SectionHeader
        subtitle="Join Early"
        title="Get Early Access"
        description="Enter LUMI's world first. Test SIMPLARA, explore the room, try outfit selection, and participate in fashion battles before everyone else."
        centered
      />

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-body font-medium text-charcoal-900 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-cream-400 bg-cream-50 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-body font-medium text-charcoal-900 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-cream-400 bg-cream-50 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-body font-medium text-charcoal-900 mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-cream-400 bg-cream-50 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all"
              placeholder="Your city"
            />
          </div>

          <div>
            <label htmlFor="interest" className="block text-body font-medium text-charcoal-900 mb-2">
              I&apos;m interested in *
            </label>
            <select
              id="interest"
              name="interest"
              required
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-cream-400 bg-cream-50 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all"
            >
              <option value="early-access">Early access to SIMPLARA</option>
              <option value="mvp-testing">Becoming an MVP tester</option>
              <option value="follow-lumi">Following LUMI&apos;s content</option>
              <option value="all">All of the above</option>
            </select>
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full">
            Enter LUMI&apos;s World
          </Button>

          <p className="text-body-sm text-center text-charcoal-500">
            By joining, you&apos;ll get exclusive updates, early access invitations, 
            and be part of LUMI&apos;s journey from the start.
          </p>
        </form>
      </div>
    </Section>
  )
}
