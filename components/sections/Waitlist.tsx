'use client'

import { useState } from 'react'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function Waitlist() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    interest: 'early-access',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
          <h2 className="text-display-3 mb-4">{t.waitlist.successTitle}</h2>
          <p className="text-body-lg text-charcoal-500 mb-8">
            {t.waitlist.successDesc}
          </p>
          <Button variant="secondary" onClick={() => setSubmitted(false)}>
            {t.waitlist.anotherEntry}
          </Button>
        </div>
      </Section>
    )
  }

  return (
    <Section id="waitlist" className="bg-gradient-to-br from-terracotta-500/10 to-charcoal-900/5">
      <SectionHeader
        subtitle={t.waitlist.subtitle}
        title={t.waitlist.title}
        description={t.waitlist.description}
        centered
      />

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-body font-medium text-charcoal-900 mb-2">
              {t.waitlist.nameLabel}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-cream-400 bg-cream-50 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all"
              placeholder={t.waitlist.namePlaceholder}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-body font-medium text-charcoal-900 mb-2">
              {t.waitlist.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-cream-400 bg-cream-50 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all"
              placeholder={t.waitlist.emailPlaceholder}
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-body font-medium text-charcoal-900 mb-2">
              {t.waitlist.cityLabel}
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-cream-400 bg-cream-50 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all"
              placeholder={t.waitlist.cityPlaceholder}
            />
          </div>

          <div>
            <label htmlFor="interest" className="block text-body font-medium text-charcoal-900 mb-2">
              {t.waitlist.interestLabel}
            </label>
            <select
              id="interest"
              name="interest"
              required
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-cream-400 bg-cream-50 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all"
            >
              <option value="early-access">{t.waitlist.earlyAccess}</option>
              <option value="mvp-testing">{t.waitlist.mvpTesting}</option>
              <option value="follow-lumi">{t.waitlist.followContent}</option>
              <option value="all">{t.waitlist.allAbove}</option>
            </select>
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full">
            {t.waitlist.submitButton}
          </Button>

          <p className="text-body-sm text-center text-charcoal-500">
            {t.waitlist.privacyText}
          </p>
        </form>
      </div>
    </Section>
  )
}
