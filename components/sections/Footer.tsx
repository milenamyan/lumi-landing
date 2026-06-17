'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getSimplaraUrl } from '@/lib/simplara'
const instagramUrl = 'https://www.instagram.com/itslumicat?igsh=MTRid243ZWJ2ZWIwdQ=='
const tiktokUrl = 'https://www.tiktok.com/@itslumi.cat?_r=1&_t=ZS-97ENKXEzIxd'

export function Footer() {
  const { t, language } = useLanguage()
  const simplaraUrl = getSimplaraUrl(language)

  return (
    <footer className="bg-charcoal-900 text-cream-100 py-8">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-h3 mb-4">LUMI</h3>
            <p className="text-body-sm text-cream-300 mb-4">
              {t.footer.description}
            </p>
            <a
              href={simplaraUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              aria-label="Visit SIMPLARA"
            >
              <Image
                src="/assets/simplara-logo.png"
                alt="SIMPLARA"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-h4 mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-body-sm">
              <li>
                <a href="#who-is-lumi" className="text-cream-300 hover:text-terracotta-500 transition-colors">
                  {t.footer.whoIsLumi}
                </a>
              </li>
              <li>
                <a href="#outfit-selection" className="text-cream-300 hover:text-terracotta-500 transition-colors">
                  {t.footer.features}
                </a>
              </li>
              <li>
                <a href="#fashion-battles" className="text-cream-300 hover:text-terracotta-500 transition-colors">
                  {t.footer.battles}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-cream-300 hover:text-terracotta-500 transition-colors">
                  {t.footer.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-h4 mb-4">{t.footer.followLumi}</h4>
            <ul className="space-y-2 text-body-sm">
              <li>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-cream-300 hover:text-terracotta-500 transition-colors">
                  {t.footer.instagram}
                </a>
              </li>
              <li>
                <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-cream-300 hover:text-terracotta-500 transition-colors">
                  {t.footer.tiktok}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-h4 mb-4">{t.footer.getInTouch}</h4>
            <ul className="space-y-2 text-body-sm">
              <li>
                <a href="#waitlist" className="text-cream-300 hover:text-terracotta-500 transition-colors">
                  {t.footer.joinWaitlist}
                </a>
              </li>
              <li>
                <a href="mailto:hello@simplara.com" className="text-cream-300 hover:text-terracotta-500 transition-colors">
                  {t.footer.emailUs}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-charcoal-700 flex flex-col md:flex-row justify-between items-center gap-4 text-body-sm text-cream-300">
          <p>© {new Date().getFullYear()} SIMPLARA. {t.footer.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-terracotta-500 transition-colors">
              {t.footer.privacyPolicy}
            </a>
            <a href="#" className="hover:text-terracotta-500 transition-colors">
              {t.footer.termsOfService}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
