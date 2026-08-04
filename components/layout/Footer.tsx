'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const footerLinks = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'Showcase', href: '/showcase' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
}

const socialLinks = [
  { label: 'Twitter', href: 'mailto:hello@colver.com', icon: 'X' },
  { label: 'GitHub', href: 'mailto:hello@colver.com', icon: 'GH' },
  { label: 'Discord', href: '/contact', icon: 'DC' },
  { label: 'LinkedIn', href: '/contact', icon: 'LI' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-bold text-foreground">
              Colver
            </Link>
            <p className="mt-4 text-muted text-sm max-w-xs">
              The future of digital creation. Build, collaborate, and ship faster with AI-powered tools.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary/50 border border-border
                           flex items-center justify-center text-xs font-bold text-muted
                           hover:text-foreground hover:border-primary/50 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Colver. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-sm text-muted hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}