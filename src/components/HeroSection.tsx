export default function HeroSection() {
  return (
    <section className="text-center py-16 px-6">
      <h1 className="text-6xl font-bold mb-8">
        <span className="text-gray-900 dark:text-white">Free Character </span>
        <span className="text-material-green-500 relative">
          Headcanon
          <svg className="absolute -bottom-2 left-0 w-full h-4 text-material-green-300" viewBox="0 0 400 20" fill="none">
            <path
              d="M10 10C50 5 150 15 200 10C250 5 350 15 390 10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </span>
        <span className="text-gray-900 dark:text-white"> Generator</span>
      </h1>
      
      <p className="text-gray-600 dark:text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
        Create unique and engaging character headcanons with our AI-powered generator. 
        Perfect for fanfiction writers, roleplayers, and character enthusiasts.
      </p>
    </section>
  )
}