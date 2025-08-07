'use client'

export default function RelationshipTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Luna Martinez",
      role: "Romance Writer",
      avatar: "LM",
      rating: 5,
      content: "This relationship generator has completely transformed my writing process! The chemistry and dynamics it creates between characters are so believable and emotionally engaging. I've discovered relationship angles I never would have thought of on my own."
    },
    {
      id: 2,
      name: "Ryan O'Connor",
      role: "Fanfiction Creator",
      avatar: "RO",
      rating: 5,
      content: "As someone who writes a lot of ship fics, this tool is incredible for exploring different relationship dynamics. The enemies-to-lovers stories it generates are particularly amazing - full of tension and emotional depth that my readers love."
    },
    {
      id: 3,
      name: "Mei Zhang",
      role: "Webcomic Artist",
      avatar: "MZ",
      rating: 5,
      content: "Perfect for developing character relationships in my webcomic! The generator helps me create compelling backstories for how my characters met and developed their bonds. The multi-language support is fantastic for my international audience."
    },
    {
      id: 4,
      name: "Jordan Kim",
      role: "Roleplay Writer",
      avatar: "JK",
      rating: 5,
      content: "This has revolutionized my roleplay campaigns! The relationship stories are so detailed and nuanced, they give me amazing material to work with. My fellow roleplayers are always impressed by the depth of character interactions I bring to the table."
    },
    {
      id: 5,
      name: "Isabella Santos",
      role: "YA Author",
      avatar: "IS",
      rating: 5,
      content: "Writing YA romance requires authentic relationship development, and this generator delivers exactly that. The teen relationship dynamics feel genuine and the progression from friendship to romance is beautifully crafted every time."
    },
    {
      id: 6,
      name: "Thomas Anderson",
      role: "Game Writer",
      avatar: "TA",
      rating: 5,
      content: "We use this for developing companion relationships in our RPG. The variety of relationship types and the emotional complexity it generates helps create memorable character interactions that players truly connect with."
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
            What Creators Say About Relationship Generator
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join thousands of writers, artists, and storytellers creating compelling character relationships with AI
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
            <div className="text-3xl font-bold text-material-green-600 mb-2">8K+</div>
            <div className="text-gray-600 dark:text-gray-400">Active Writers</div>
          </div>
          <div className="bg-white dark:bg-dark-card rounded-xl p-6 border border-light-border dark:border-dark-border">
            <div className="text-3xl font-bold text-material-green-600 mb-2">25K+</div>
            <div className="text-gray-600 dark:text-gray-400">Relationships Created</div>
          </div>
          <div className="bg-white dark:bg-dark-card rounded-xl p-6 border border-light-border dark:border-dark-border">
            <div className="text-3xl font-bold text-material-green-600 mb-2">4.8★</div>
            <div className="text-gray-600 dark:text-gray-400">User Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}