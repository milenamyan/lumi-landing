'use client'

import { useState } from 'react'
import { Section, SectionHeader } from '@/components/ui/Section'
import { useLanguage } from '@/lib/i18n/LanguageContext'

interface FAQItem {
  question: string
  answer: string
}

export function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: t.faq.q1,
      answer: t.faq.a1,
    },
    {
      question: t.faq.q2,
      answer: t.faq.a2,
    },
    {
      question: t.faq.q3,
      answer: t.faq.a3,
    },
    {
      question: t.faq.q4,
      answer: t.faq.a4,
    },
    {
      question: t.faq.q5,
      answer: t.faq.a5,
    },
    {
      question: t.faq.q6,
      answer: t.faq.a6,
    },
    {
      question: t.faq.q7,
      answer: t.faq.a7,
    },
    {
      question: t.faq.q8,
      answer: t.faq.a8,
    },
    {
      question: t.faq.q9,
      answer: t.faq.a9,
    },
    {
      question: t.faq.q10,
      answer: t.faq.a10,
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section id="faq" className="bg-cream-100">
      <SectionHeader
        subtitle={t.faq.subtitle}
        title={t.faq.title}
        description={t.faq.description}
        centered
      />

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl border border-cream-400 bg-cream-50 overflow-hidden transition-all duration-300 hover:border-cream-500"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors"
            >
              <span className="text-h4 text-charcoal-900">{faq.question}</span>
              <span className={`text-h3 text-terracotta-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-6 pb-5">
                <p className="text-body text-charcoal-500">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
