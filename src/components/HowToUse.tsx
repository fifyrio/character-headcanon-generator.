import { ScrollToGeneratorButton } from './ScrollToGeneratorButton'

export default function HowToUse() {
  const steps = [
    {
      step: "01",
      title: "Choose Your Character",
      description: "Enter a character name or select from our preset popular characters like Harry Potter, Sherlock Holmes, or Batman. You can also add additional details about the character to make the headcanon more personalized.",
      icon: (
        <svg className="w-8 h-8 text-material-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      step: "02", 
      title: "Customize Your Preferences",
      description: "Select your preferred writing style (Normal, Funny, or Dark), choose the type of headcanon you want (Personality Traits, Background Story, Relationships, or Skills & Abilities), and set the desired length from very short to long detailed descriptions.",
      icon: (
        <svg className="w-8 h-8 text-material-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      )
    },
    {
      step: "03",
      title: "Generate & Enjoy",
      description: "Click the 'Generate Headcanon' button and let our AI create a unique, creative headcanon for your character. The generated content will appear instantly, and you can use it for fanfiction, roleplaying, or character development inspiration.",
      icon: (
        <svg className="w-8 h-8 text-material-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-dark-bg transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="inline-block bg-material-green-600 text-white px-8 py-3 rounded-lg text-2xl font-bold mb-4">
            How to Generate Character Headcanon
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Follow these simple steps to create unique and engaging character headcanons with our AI-powered generator
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-white dark:bg-dark-card rounded-2xl p-8 border border-light-border dark:border-dark-border hover:border-material-green-500 dark:hover:border-material-green-500 transition-colors duration-300 h-full">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-material-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="p-3 bg-material-green-50 dark:bg-material-green-900/20 rounded-full">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-material-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            Ready to create amazing character headcanons?
          </p>
          <ScrollToGeneratorButton />
        </div>
      </div>
    </section>
  )
}