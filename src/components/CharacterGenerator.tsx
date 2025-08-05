'use client'

import { useState } from 'react'

const characters = [
  'Harry Potter', 'Sherlock Holmes', 'Luke Skywalker',
  'Batman', 'Spider-Man'
]

const writingStyles = ['Normal', 'Funny', 'Dark']
const headcanonTypes = ['Personality Traits', 'Background Story', 'Relationships', 'Skills & Abilities']
const headcanonLengths = ['Very Short', 'Short', 'Medium', 'Long']

export default function CharacterGenerator() {
  const [selectedCharacter, setSelectedCharacter] = useState('')
  const [customCharacter, setCustomCharacter] = useState('')
  const [writingStyle, setWritingStyle] = useState('Normal')
  const [headcanonType, setHeadcanonType] = useState('Personality Traits')
  const [headcanonLength, setHeadcanonLength] = useState('Very Short')
  const [characterDetails, setCharacterDetails] = useState('')
  const [generatedHeadcanon, setGeneratedHeadcanon] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const handleCharacterSelect = (character: string) => {
    setSelectedCharacter(character)
    setCustomCharacter('')
  }

  const handleGenerate = async () => {
    setIsGenerating(true)
    setGeneratedHeadcanon('')
    
    try {
      const character = selectedCharacter || customCharacter
      
      const response = await fetch('/api/generate-headcanon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          character,
          writingStyle,
          headcanonType,
          headcanonLength,
          characterDetails,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to generate headcanon')
      }

      const data = await response.json()
      setGeneratedHeadcanon(data.headcanon)
    } catch (error) {
      console.error('Error generating headcanon:', error)
      setGeneratedHeadcanon(
        `Sorry, there was an error generating the headcanon. ${error instanceof Error ? error.message : 'Please try again.'}`
      )
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6" data-generator>
      <div className="bg-light-card dark:bg-dark-card rounded-2xl p-8 mb-8 transition-colors">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          AI-Powered Character Headcanon Generator
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Input Form */}
          <div className="space-y-6">
            {/* Character Selection */}
            <div>
              <input
                type="text"
                placeholder="Enter character name here or choose from the list below..."
                value={customCharacter}
                onChange={(e) => {
                  setCustomCharacter(e.target.value)
                  setSelectedCharacter('')
                }}
                className="w-full p-4 bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-material-green-500 transition-colors"
              />
              
              <div className="grid grid-cols-3 gap-3 mt-4">
                {characters.map((character) => (
                  <button
                    key={character}
                    onClick={() => handleCharacterSelect(character)}
                    className={`p-3 rounded-lg border transition-all ${
                      selectedCharacter === character
                        ? 'bg-material-green-600 border-material-green-500 text-white'
                        : 'bg-white dark:bg-dark-bg border-light-border dark:border-dark-border text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500'
                    }`}
                  >
                    {character}
                  </button>
                ))}
                <button className="p-3 rounded-lg border border-light-border dark:border-dark-border bg-white dark:bg-dark-bg text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 transition-all flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Configuration Options */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">Writing Style</span>
                </div>
                <div className="flex space-x-2">
                  {writingStyles.map((style) => (
                    <button
                      key={style}
                      onClick={() => setWritingStyle(style)}
                      className={`px-4 py-2 rounded-lg border transition-all ${
                        writingStyle === style
                          ? 'bg-material-green-600 border-material-green-500 text-white'
                          : 'bg-white dark:bg-dark-bg border-light-border dark:border-dark-border text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">Headcanon Type</span>
                </div>
                <select
                  value={headcanonType}
                  onChange={(e) => setHeadcanonType(e.target.value)}
                  className="bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-material-green-500 transition-colors"
                >
                  {headcanonTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">Headcanon Length</span>
                </div>
                <select
                  value={headcanonLength}
                  onChange={(e) => setHeadcanonLength(e.target.value)}
                  className="bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-material-green-500 transition-colors"
                >
                  {headcanonLengths.map((length) => (
                    <option key={length} value={length}>{length}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Character Details */}
            <div>
              <textarea
                placeholder="Enter additional details about the character, such as personality traits, background story, etc..."
                value={characterDetails}
                onChange={(e) => setCharacterDetails(e.target.value)}
                rows={4}
                className="w-full p-4 bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-material-green-500 resize-none transition-colors"
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating || (!selectedCharacter && !customCharacter)}
              className="w-full bg-material-green-600 hover:bg-material-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Generating...</span>
                </>
              ) : (
                <span>Generate Headcanon</span>
              )}
            </button>
          </div>

          {/* Right Side - Output */}
          <div className="bg-white dark:bg-dark-bg rounded-lg p-6 border border-light-border dark:border-dark-border transition-colors">
            {generatedHeadcanon ? (
              <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                {generatedHeadcanon}
              </div>
            ) : (
              <div className="text-gray-500 text-center py-12">
                The generated headcanon content will be displayed here...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}