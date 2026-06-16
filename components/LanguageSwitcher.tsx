'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 text-body font-medium">
      <button
        onClick={() => setLanguage('en')}
        className={`transition-colors ${
          language === 'en'
            ? 'text-terracotta-500 font-bold'
            : 'text-charcoal-500 hover:text-charcoal-900'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-charcoal-300">/</span>
      <button
        onClick={() => setLanguage('ru')}
        className={`transition-colors ${
          language === 'ru'
            ? 'text-terracotta-500 font-bold'
            : 'text-charcoal-500 hover:text-charcoal-900'
        }`}
        aria-label="Переключить на русский"
      >
        RU
      </button>
    </div>
  )
}
