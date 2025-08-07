import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RelationshipGenerator from '@/components/RelationshipGenerator'
import RelationshipHowToUse from '@/components/RelationshipHowToUse'
import RelationshipFeatures from '@/components/RelationshipFeatures'
import RelationshipFAQ from '@/components/RelationshipFAQ'
import RelationshipTestimonials from '@/components/RelationshipTestimonials'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free AI Relationship Headcanon Generator',
  description: 'Generate unique character relationships with AI. Create romantic, friendship, and family dynamics between any characters for fanfiction and storytelling.',
  keywords: [
    'relationship generator',
    'character romance',
    'fanfiction tool',
    'enemies to lovers'
  ],
  alternates: {
    canonical: 'https://www.ai-character-headcanon-generator.com/relationship-headcanon-generator',
  },
  openGraph: {
    title: 'Free AI Relationship Headcanon Generator',
    description: 'Generate unique character relationships with AI. Create romantic, friendship, and family dynamics between any characters for fanfiction and storytelling.',
    url: 'https://www.ai-character-headcanon-generator.com/relationship-headcanon-generator',
    siteName: 'AI Character Headcanon Generator',
    type: 'website',
    images: [{
      url: '/relationship-generator-preview.jpg',
      width: 1200,
      height: 630,
      alt: 'AI Relationship Headcanon Generator - Create Character Stories'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Relationship Headcanon Generator', 
    description: 'Generate unique character relationships with AI. Create romantic, friendship, and family dynamics between any characters for fanfiction and storytelling.',
    images: ['/relationship-generator-preview.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
}

export default function RelationshipHeadcanonGeneratorPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg transition-colors">
      <Header />
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Relationship Headcanon Generator
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              AI-powered tool that helps you create your own unique character relationships.
            </p>
          </div>
          <RelationshipGenerator />
        </div>
      </div>
      <RelationshipHowToUse />
      <RelationshipFeatures />
      <RelationshipFAQ />
      <RelationshipTestimonials />
      <Footer />
    </main>
  )
}