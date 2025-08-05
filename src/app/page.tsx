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
  description: 'Generate unique and engaging character headcanons with our AI-powered tool. Perfect for fanfiction writers, roleplayers, and character enthusiasts. Create personality traits, backstories, and relationships instantly.',
  keywords: ['AI character generator', 'character headcanon', 'fanfiction tools', 'roleplaying character development', 'customizable headcanons', 'writing style generator', 'personality traits tool', 'character background stories'],
  alternates: {
    canonical: 'https://www.ai-character-headcanon-generator.com/',
  },
  openGraph: {
    title: 'Free AI Character Headcanon Generator',
    description: 'Create unique and engaging character headcanons with our AI-powered generator',
    url: 'https://www.ai-character-headcanon-generator.com/',
    siteName: 'AI Character Headcanon Generator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Character Headcanon Generator',
    description: 'Create unique and engaging character headcanons with our AI-powered generator',
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