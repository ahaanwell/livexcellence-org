import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', url: '#' },
      { name: 'Pricing', url: '#' },
      { name: 'How It Works', url: '#' },
      { name: 'Download', url: '#' }
    ],
    Company: [
      { name: 'About Us', url: '#' },
      { name: 'Blog', url: '#' },
      { name: 'Careers', url: '#' },
      { name: 'Press Kit', url: '#' }
    ],
    Support: [
      { name: 'Help Center', url: '#' },
      { name: 'Contact Us', url: '#' },
      { name: 'FAQs', url: '/faq' },
      { name: 'System Status', url: '#' }
    ],
    Legal: [
      { name: 'Eula', url: '/eula' },
      { name: 'Privacy Policy', url: '/privacy-policy' },
      { name: 'Refund Policy', url: '/refund-policy' },
      { name: 'Software Principles', url: '/software-principles' },
      { name: 'Terms & Conditions', url: '/terms-conditions' },
    ]
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: 'https://facebook.com' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-3">Livexcellence</h3>
            <p className="text-sm text-gray-400 mb-4">
              Clean, optimize, and boost your system effortlessly.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#073e89] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-3">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.url} className="text-sm hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="font-semibold text-white mb-2">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">Get tips and updates delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-[#073e89] text-sm"
              />
              <button className="bg-[#073e89] hover:bg-[#05305e] px-6 py-2 rounded-lg font-semibold text-white transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 Livexcellence. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
