import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - AI Character Headcanon Generator',
  description: 'Terms of Service for AI Character Headcanon Generator. Read our terms and conditions for using our AI-powered character creation tool.',
  alternates: {
    canonical: 'https://www.ai-character-headcanon-generator.com/terms',
  },
}

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                By accessing and using AI Character Headcanon Generator ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Description of Service</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                AI Character Headcanon Generator is an AI-powered tool that creates unique character backstories, personality traits, and fictional scenarios based on user input. The service uses advanced artificial intelligence to generate creative content for entertainment and creative purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">User Responsibilities</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">By using our service, you agree to:</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Use the service only for lawful purposes and in accordance with these Terms</li>
                <li>Not use the service to generate content that is illegal, harmful, threatening, abusive, or offensive</li>
                <li>Not attempt to reverse engineer, decompile, or extract the source code of our AI models</li>
                <li>Not use the service to generate content that infringes on intellectual property rights</li>
                <li>Not overload or attempt to disrupt the service infrastructure</li>
                <li>Respect the rights and dignity of others when creating content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Intellectual Property Rights</h2>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Service Ownership</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The AI Character Headcanon Generator service, including its design, functionality, and underlying technology, is owned by us and protected by intellectual property laws.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Generated Content</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You retain ownership of the creative content generated through our service. However, you acknowledge that similar content may be generated for other users based on similar inputs, and you cannot claim exclusive rights to concepts or ideas that may naturally result from the AI generation process.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Content Guidelines</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                While we encourage creativity, users must not generate content that:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Contains hate speech, discrimination, or promotes violence</li>
                <li>Includes explicit sexual content involving minors</li>
                <li>Violates privacy rights or contains personally identifiable information of real individuals</li>
                <li>Promotes illegal activities or harmful behavior</li>
                <li>Infringes on copyrighted material or trademarks</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Service Availability</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We strive to maintain service availability, but we do not guarantee uninterrupted access. The service may be temporarily unavailable due to maintenance, updates, or technical issues. We reserve the right to modify or discontinue the service at any time with reasonable notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">AI-Generated Content Disclaimer</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Content generated by our AI is created algorithmically and may not always be accurate, appropriate, or suitable for all purposes. Users should review and edit generated content as needed. We do not endorse or take responsibility for the content generated by the AI system.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Privacy Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices regarding the collection and use of your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Termination</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We may terminate or suspend your access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will cease immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Changes to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Governing Law</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which our company is registered, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-900 dark:text-white font-medium">Email: support@ai-character-headcanon-generator.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}