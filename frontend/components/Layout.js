// frontend/components/Layout.js

import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* PROFESSIONAL HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg">Area Code Finder</div>
                <div className="text-xs text-gray-500 -mt-1">300+ U.S. Codes</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/area-codes" className="text-gray-700 hover:text-blue-600 font-medium transition">
                All Codes
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium transition">
                FAQ
              </Link>
              <Link href="/blog/how-to-identify-spam-calls" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Spam Guide
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Contact
              </Link>
              
              
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
              <div className="flex flex-col gap-3">
                <Link
                  href="/area-codes"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  All Codes
                </Link>
                <Link
                  href="/faq"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="/blog/how-to-identify-spam-calls"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Spam Guide
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/area-codes"
                  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Search Now
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">{children}</main>

      {/* PROFESSIONAL FOOTER */}
      <footer className="bg-gray-900 text-gray-300 mt-16">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-white font-bold text-lg">Area Code Finder</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Your trusted source for U.S. area code information. Find locations, time zones, and identify unknown callers instantly.
              </p>
              <div className="flex gap-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/area-codes" className="text-gray-400 hover:text-white transition text-sm">
                    Browse All Codes
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white transition text-sm">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition text-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog/how-to-identify-spam-calls" className="text-gray-400 hover:text-white transition text-sm">
                    Spam Call Guide
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular States */}
            <div>
              <h3 className="text-white font-semibold mb-4">Popular States</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/state/California" className="text-gray-400 hover:text-white transition text-sm">
                    California
                  </Link>
                </li>
                <li>
                  <Link href="/state/Texas" className="text-gray-400 hover:text-white transition text-sm">
                    Texas
                  </Link>
                </li>
                <li>
                  <Link href="/state/New York" className="text-gray-400 hover:text-white transition text-sm">
                    New York
                  </Link>
                </li>
                <li>
                  <Link href="/state/Florida" className="text-gray-400 hover:text-white transition text-sm">
                    Florida
                  </Link>
                </li>
                <li>
                  <Link href="/state/Illinois" className="text-gray-400 hover:text-white transition text-sm">
                    Illinois
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/understanding-area-codes" className="text-gray-400 hover:text-white transition text-sm">
                    Area Code History
                  </Link>
                </li>
                <li>
                  <Link href="/blog/phone-number-portability-explained" className="text-gray-400 hover:text-white transition text-sm">
                    Number Portability
                  </Link>
                </li>
                <li>
                  <a href="/privacy-policy" className="text-gray-400 hover:text-white transition text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="text-gray-400 hover:text-white transition text-sm">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/sitemap.xml" className="text-gray-400 hover:text-white transition text-sm">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>

          
        </div>

        {/* Bottom Bar */}
        <div className="bg-gray-950 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Area Code Finder. All rights reserved.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <a href="/privacy-policy" className="hover:text-gray-300 transition">
                  Privacy
                </a>
                <span>•</span>
                <a href="/terms-of-service" className="hover:text-gray-300 transition">
                  Terms
                </a>
                <span>•</span>
                <a href="/contact" className="hover:text-gray-300 transition">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}