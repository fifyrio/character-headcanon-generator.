'use client'

export default function RelationshipHowToUse() {
  const steps = [
    {
      step: "01",
      title: "Enter Two Characters",
      description: "Input the names of two characters you want to create a relationship for. You can choose from our suggestions of popular characters or enter any characters from your favorite shows, books, games, or original creations.",
      icon: (
        <svg className="w-8 h-8 text-material-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      step: "02", 
      title: "Choose Relationship & Genre",
      description: "Select the type of relationship you want to explore (romantic, friendship, family, rivals, etc.) and pick story genres like comedy, fantasy, or sci-fi to set the tone. Use advanced settings to customize language and add specific details.",
      icon: (
        <svg className="w-8 h-8 text-material-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      step: "03",
      title: "Generate & Explore",
      description: "Click 'Weave Their Story Together' and watch as AI creates a unique relationship story between your characters. The generated content will showcase their dynamic, interactions, and the special connection they share.",
      icon: (
        <svg className="w-8 h-8 text-material-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ]

  const scrollToGenerator = () => {
    const element = document.querySelector('[data-generator]')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-dark-bg transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="inline-block bg-material-green-600 text-white px-8 py-3 rounded-lg text-2xl font-bold mb-4">
            How to Generate Relationship Stories
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Follow these simple steps to create compelling relationship dynamics and stories between any two characters
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

      </div>
    </section>
  )
}