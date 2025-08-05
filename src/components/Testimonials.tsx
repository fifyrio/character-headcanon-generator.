export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Fanfiction Writer",
      avatar: "SC",
      rating: 5,
      content: "This tool has revolutionized my character development process! The AI generates such creative and detailed backstories that perfectly match the characters I'm working with. I've been able to overcome writer's block countless times thanks to this amazing generator."
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "D&D Dungeon Master",
      avatar: "MR",
      rating: 5,
      content: "As a DM, I need unique NPCs constantly, and this generator delivers every time. The personality traits and background stories it creates are so rich and detailed that my players are always surprised by the depth of every character they meet."
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Creative Writing Student",
      avatar: "EW",
      rating: 5,
      content: "I was struggling with character development for my novel until I found this tool. The headcanons it generates are incredibly inspiring and help me think about my characters in ways I never considered before. It's like having a writing mentor!"
    },
    {
      id: 4,
      name: "Alex Thompson",
      role: "Game Developer",
      avatar: "AT",
      rating: 5,
      content: "We use this for rapid character prototyping in our indie game studio. The variety of personalities and backstories it generates helps us create more diverse and interesting NPCs. The different writing styles are perfect for matching our game's tone."
    },
    {
      id: 5,
      name: "Jessica Park",
      role: "Roleplay Enthusiast",
      avatar: "JP",
      rating: 5,
      content: "This generator has taken my roleplaying to the next level! I can quickly create detailed character backgrounds that make my roleplay sessions so much more immersive. My friends are always impressed by the depth of my characters now."
    },
    {
      id: 6,
      name: "David Kumar",
      role: "Screenwriter",
      avatar: "DK",
      rating: 5,
      content: "Perfect for developing supporting characters in my scripts. The AI understands character archetypes so well and always provides fresh perspectives. I especially love the relationship dynamics it suggests - very helpful for ensemble casts."
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300 dark:text-gray-600'
        }`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Users Say About Character Headcanon Generator
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join thousands of writers, creators, and storytellers who trust our AI to bring their characters to life
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-dark-card rounded-xl p-6 border border-light-border dark:border-dark-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* User Info */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-material-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Review Content */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white dark:bg-dark-card rounded-xl p-6 border border-light-border dark:border-dark-border">
            <div className="text-3xl font-bold text-material-green-600 mb-2">10K+</div>
            <div className="text-gray-600 dark:text-gray-400">Happy Users</div>
          </div>
          <div className="bg-white dark:bg-dark-card rounded-xl p-6 border border-light-border dark:border-dark-border">
            <div className="text-3xl font-bold text-material-green-600 mb-2">50K+</div>
            <div className="text-gray-600 dark:text-gray-400">Characters Created</div>
          </div>
          <div className="bg-white dark:bg-dark-card rounded-xl p-6 border border-light-border dark:border-dark-border">
            <div className="text-3xl font-bold text-material-green-600 mb-2">4.9★</div>
            <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}