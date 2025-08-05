import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection' 
import HowToUse from '@/components/HowToUse'
import CharacterGenerator from '@/components/CharacterGenerator'
import Features from '@/components/Features'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg transition-colors">
      <Header />
      <HeroSection />      
      <CharacterGenerator />
      <HowToUse />
      <Features />
      <FAQ />
      <Footer />
    </main>
  )
}