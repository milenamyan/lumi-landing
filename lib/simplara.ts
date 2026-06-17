import type { Language } from '@/lib/i18n/translations'

const SIMPLARA_BASE_URL = 'https://simplara-landing.vercel.app'

export function getSimplaraUrl(language: Language): string {
  return language === 'ru' ? `${SIMPLARA_BASE_URL}/ru` : SIMPLARA_BASE_URL
}
