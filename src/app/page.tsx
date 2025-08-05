import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection' 
import HowToUse from '@/components/HowToUse'
import CharacterGenerator from '@/components/CharacterGenerator'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free AI Character Headcanon Generator',
  description: 'Generate unique character headcanons with AI. Perfect for fanfiction writers and roleplayers. Create personality traits and backstories instantly.',
  keywords: ['AI character generator', 'character headcanon', 'fanfiction tools', 'roleplay', 'personality traits'],
  alternates: {
    canonical: 'https://www.ai-character-headcanon-generator.com/',
  },
  openGraph: {
    title: 'Free AI Character Headcanon Generator',
    description: 'Generate unique character headcanons with AI. Perfect for fanfiction writers and roleplayers.',
    url: 'https://www.ai-character-headcanon-generator.com/',
    siteName: 'AI Character Headcanon Generator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Character Headcanon Generator',
    description: 'Generate unique character headcanons with AI. Perfect for fanfiction writers and roleplayers.',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg transition-colors">
      <Header />
      <HeroSection />      
      <CharacterGenerator />
      <HowToUse />
      <Features />
      <FAQ />
      <Testimonials />
      <Footer />
    </main>
  )
}