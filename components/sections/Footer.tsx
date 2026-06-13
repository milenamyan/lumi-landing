'use client'

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-100 py-12">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-h3 mb-4">LUMI</h3>
            <p className="text-body-sm text-cream-300">
              Your AI fashion companion inside SIMPLARA
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-h4 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-body-sm">
              <li>
                <a href="#who-is-lumi" className="text-cream-300 hover:text-terracotta-500 transition-colors">
                  Who is LUMI
                </a>
              </li>
              <li>
                <a href="#outfit-selection" className="text-cream-300 hover:text-terracotta-500 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#fashion-battles" className="text-cream-300 hover:text-terracotta-500 transition-colors">
                  Battles
                </a>
              </li>
              <li>
                <a href="#faq" className="text-cream-300 hover:text-terracotta-500 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-h4 mb-4">Follow LUMI</h4>
            <ul className="space-y-2 text-body-sm">
              <li>
                <a href="#" className="text-cream-300 hover:text-terracotta-500 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-cream-300 hover:text-terracotta-500 transition-colors">
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" className="text-cream-300 hover:text-terracotta-500 transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-h4 mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-body-sm">
              <li>
                <a href="#waitlist" className="text-cream-300 hover:text-terracotta-500 transition-colors">
                  Join Waitlist
                </a>
              </li>
              <li>
                <a href="mailto:hello@simplara.com" className="text-cream-300 hover:text-terracotta-500 transition-colors">
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-charcoal-700 flex flex-col md:flex-row justify-between items-center gap-4 text-body-sm text-cream-300">
          <p>© {new Date().getFullYear()} SIMPLARA. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-terracotta-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-terracotta-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
