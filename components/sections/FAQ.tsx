'use client'

import { useState } from 'react'
import { Section, SectionHeader } from '@/components/ui/Section'

interface FAQItem {
  question: string
  answer: string
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: 'Who is LUMI?',
      answer: 'LUMI is an AI cat assistant who lives inside SIMPLARA. He is your personal fashion companion who helps you choose outfits, evaluates style, and supports you in fashion battles. LUMI is not just a mascot — he is an emotional AI interface that makes fashion decisions warmer and more personal.',
    },
    {
      question: 'Where does LUMI live?',
      answer: 'LUMI lives in his own room inside the SIMPLARA app. He starts in a simple space and gradually develops a more elaborate home as you engage with your wardrobe. His world reflects your fashion progress and activity.',
    },
    {
      question: 'Is LUMI only for women?',
      answer: 'No! LUMI helps both men and women look more stylish with the clothes they already own. The AI understands different styles, preferences, and fashion needs regardless of gender.',
    },
    {
      question: 'Do I need to buy new clothes?',
      answer: 'Not at all. LUMI works with your existing wardrobe. The goal is to help you discover new combinations, use forgotten pieces, and feel more confident with what you already own. No pressure to purchase anything.',
    },
    {
      question: 'How does LUMI\'s room improve?',
      answer: 'LUMI\'s space evolves based on your activity. When you upload clothes, create outfits, participate in battles, and earn Lumens, you unlock the ability to upgrade his room with better furniture, décor, and items. The more you engage with your style, the richer LUMI\'s world becomes.',
    },
    {
      question: 'How does outfit evaluation work?',
      answer: 'LUMI evaluates outfit composition, not your appearance. He looks at color harmony, occasion relevance, seasonal appropriateness, balance, and wardrobe usage. The feedback is private, constructive, and designed to help you improve — never to judge or criticize.',
    },
    {
      question: 'What are outfit battles?',
      answer: 'Fashion battles are friendly competitions where users compare outfits. LUMI helps you prepare by suggesting improvements, provides AI analysis during the battle, and explains results afterward. Battles are decided by community voting with LUMI\'s evaluation as a transparent analytical layer.',
    },
    {
      question: 'Is this pay-to-win?',
      answer: 'No. Battle outcomes are determined by outfit quality and community votes, not by how much you spend. Room upgrades are cosmetic and don\'t provide unfair advantages. LUMI helps everyone improve their style through honest feedback and guidance.',
    },
    {
      question: 'When can I try SIMPLARA and meet LUMI?',
      answer: 'We\'re currently in development and building the waitlist. Join early access to be among the first to enter LUMI\'s world, test features, and help shape the experience.',
    },
    {
      question: 'How can I follow LUMI outside the app?',
      answer: 'Follow @itslumicat on Instagram and TikTok for daily fashion content, style tips, relatable moments, and behind-the-scenes looks at how LUMI thinks about fashion.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section id="faq" className="bg-cream-100">
      <SectionHeader
        subtitle="Questions & Answers"
        title="Frequently Asked Questions"
        description="Everything you need to know about LUMI and SIMPLARA"
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
