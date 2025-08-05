import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - AI Character Headcanon Generator',
  description: 'Privacy Policy for AI Character Headcanon Generator. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://www.ai-character-headcanon-generator.com/privacy',
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-white dark:bg-dark-bg border-b border-light-border dark:border-dark-border transition-colors">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-material-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <span className="text-gray-900 dark:text-white font-medium">Character Headcanon Generator</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-light-card dark:bg-dark-card rounded-2xl p-8 border border-light-border dark:border-dark-border transition-colors">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Welcome to AI Character Headcanon Generator ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered character headcanon generation service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Information You Provide</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Character names and details you input for headcanon generation</li>
                <li>Writing style preferences and content type selections</li>
                <li>Any additional character details or context you provide</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Device information (browser type, operating system)</li>
                <li>Usage data (pages visited, time spent on site)</li>
                <li>IP address and general location information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Generate AI-powered character headcanons based on your input</li>
                <li>Improve our service quality and user experience</li>
                <li>Analyze usage patterns to enhance our AI models</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Sharing and Disclosure</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety, or that of others</li>
                <li>With service providers who assist in operating our website (under strict confidentiality agreements)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Security</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Your Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Right to access your personal information</li>
                <li>Right to rectify inaccurate information</li>
                <li>Right to erase your personal information</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Children's Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-900 dark:text-white font-medium">Email: support@chat-mentor.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}