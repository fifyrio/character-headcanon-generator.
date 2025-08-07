'use client'

import { useState } from 'react'

export default function RelationshipFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0) // First FAQ open by default

  const faqs = [
    {
      question: "What is a Relationship Headcanon Generator and how does it create character relationships?",
      answer: "A Relationship Headcanon Generator is an AI-powered tool that creates detailed stories and scenarios exploring the dynamics between two characters. It analyzes the characters' personalities, backgrounds, and the relationship type you specify to generate unique, engaging narratives about how they interact, connect, and develop their bond over time."
    },
    {
      question: "What types of character relationships can I generate with this tool?",
      answer: "You can create various relationship types including romantic relationships (secret crush, enemies to lovers, best friends to lovers), friendships (best friends, rivals to friends), family dynamics (siblings, parent/child), mentorship relationships, rivalries, partnerships, and more. Each type is crafted with specific dynamics and emotional depth."
    },
    {
      question: "Can I use characters from different fandoms or mix original characters with existing ones?",
      answer: "Absolutely! Our generator works with any combination of characters - you can pair characters from the same fandom, different fandoms, or even mix existing characters with your own original creations. The AI adapts to create believable dynamics regardless of the characters' origins."
    },
    {
      question: "How do the genre selections affect the relationship stories?",
      answer: "Genre selections significantly influence the tone, setting, and style of your relationship story. Comedy creates humorous interactions, Fantasy might include magical elements, Sci-Fi could involve futuristic scenarios, Romance focuses on emotional connections, and Adventure places characters in exciting situations that test their bond."
    },
    {
      question: "Are the generated relationship stories suitable for fanfiction and creative writing?",
      answer: "Yes! The generated stories are perfect for fanfiction, creative writing, roleplay scenarios, and character development exercises. All content is original and can be freely used, edited, or expanded upon in your creative works. Many writers use our generator to overcome writer's block or explore new relationship dynamics."
    },
    {
      question: "Can I generate relationship stories in different languages?",
      answer: "Our generator supports multiple languages including English, Chinese, Japanese, Korean, Spanish, French, German, and Portuguese. You can select your preferred language in the advanced settings to receive the entire relationship story in that language."
    },
    {
      question: "How detailed are the generated relationship stories and can I customize the length?",
      answer: "The generator creates comprehensive 2-4 paragraph stories that include character interactions, dialogue, emotional dynamics, and specific scenarios. While the length is optimized for engagement and readability, you can use the additional details field to request specific elements or themes to be included in your story."
    },
    {
      question: "Is there a limit to how many relationship stories I can generate?",
      answer: "There's a brief cooldown period (5 seconds) between generations to ensure optimal performance, but you can create as many relationship stories as you'd like. This allows you to explore different dynamics, try various character pairings, and experiment with different relationship types and genres."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-20 px-6 bg-white dark:bg-dark-bg transition-colors">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="inline-block bg-material-green-600 text-white px-8 py-3 rounded-lg text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Everything you need to know about creating character relationship stories with AI
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-light-card dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors duration-200"
              >
                <h3 className="text-gray-900 dark:text-white font-medium text-lg pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg 
                    className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
                      openFAQ === index ? 'rotate-45' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-light-border dark:border-dark-border pt-4">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
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