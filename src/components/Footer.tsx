import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-16 px-6 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.svg"
                alt="AI Character Headcanon Generator"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              A powerful AI-driven platform for generating unique and engaging character headcanons
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://x.com/KiwiCoderWu" className="text-gray-600 dark:text-gray-400 hover:text-material-green-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product Section */}
          <div>
            <div className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Product</div>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-material-green-500 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-material-green-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <div className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Useful Links</div>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://aitoolcenter.com/" 
                  title="AI Tool Center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-material-green-500 transition-colors"
                >
                  AI Tool Center
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <div className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Legal</div>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-material-green-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-material-green-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <div className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Contact Us</div>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:support@ai-character-headcanon-generator.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-material-green-500 transition-colors"
                  title="Email us at support@ai-character-headcanon-generator.com"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © 2025 AI Character Headcanon Generator • All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}