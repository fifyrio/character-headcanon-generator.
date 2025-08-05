'use client'

import { useState, useEffect } from 'react'

const characters = [
  'Harry Potter', 'Sherlock Holmes', 'Luke Skywalker',
  'Batman', 'Spider-Man'
]

// Extended list of popular IP characters for random selection
const popularCharacters = [
  // Harry Potter
  'Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Draco Malfoy', 'Severus Snape',
  // Marvel
  'Spider-Man', 'Iron Man', 'Captain America', 'Thor', 'Black Widow', 'Hulk', 'Deadpool', 'Wolverine',
  // DC Comics
  'Batman', 'Superman', 'Wonder Woman', 'The Flash', 'Green Lantern', 'Aquaman', 'Joker',
  // Star Wars
  'Luke Skywalker', 'Princess Leia', 'Han Solo', 'Darth Vader', 'Obi-Wan Kenobi', 'Yoda',
  // Sherlock Holmes
  'Sherlock Holmes', 'John Watson', 'Moriarty',
  // Lord of the Rings
  'Frodo Baggins', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli', 'Boromir',
  // Game of Thrones
  'Jon Snow', 'Daenerys Targaryen', 'Tyrion Lannister', 'Arya Stark', 'Sansa Stark',
  // Anime/Manga
  'Naruto Uzumaki', 'Sasuke Uchiha', 'Monkey D. Luffy', 'Goku', 'Vegeta', 'Light Yagami',
  // Disney
  'Elsa', 'Anna', 'Simba', 'Mulan', 'Belle', 'Ariel',
  // Pokemon
  'Ash Ketchum', 'Pikachu', 'Misty', 'Brock',
  // Final Fantasy
  'Cloud Strife', 'Sephiroth', 'Tifa Lockhart',
  // Other Popular
  'Indiana Jones', 'James Bond', 'Lara Croft', 'Master Chief', 'Link', 'Zelda'
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
  const [outputMarkdown, setOutputMarkdown] = useState(false)
  const [lastGenerateTime, setLastGenerateTime] = useState(0)
  const [remainingCooldown, setRemainingCooldown] = useState(0)
  const [copySuccess, setCopySuccess] = useState(false)

  // Cooldown timer effect
  useEffect(() => {
    if (remainingCooldown > 0) {
      const timer = setTimeout(() => {
        setRemainingCooldown(remainingCooldown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [remainingCooldown])

  const handleCharacterSelect = (character: string) => {
    setSelectedCharacter(character)
    setCustomCharacter('')
  }

  const handleRandomCharacter = () => {
    const randomIndex = Math.floor(Math.random() * popularCharacters.length)
    const randomCharacter = popularCharacters[randomIndex]
    setSelectedCharacter(randomCharacter)
    setCustomCharacter('')
  }

  const handleGenerate = async () => {
    const currentTime = Date.now()
    const timeSinceLastGenerate = currentTime - lastGenerateTime
    const cooldownTime = 5000 // 5 seconds in milliseconds

    // Check if still in cooldown period
    if (timeSinceLastGenerate < cooldownTime) {
      const remaining = Math.ceil((cooldownTime - timeSinceLastGenerate) / 1000)
      setRemainingCooldown(remaining)
      return
    }

    setIsGenerating(true)
    setGeneratedHeadcanon('')
    setLastGenerateTime(currentTime)
    setRemainingCooldown(0)
    
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
          outputMarkdown,
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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedHeadcanon)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = generatedHeadcanon
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand('copy')
        setCopySuccess(true)
        setTimeout(() => setCopySuccess(false), 2000)
      } catch (fallbackErr) {
        console.error('Fallback copy failed: ', fallbackErr)
      }
      document.body.removeChild(textArea)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6" data-generator>
      <div className="bg-light-card dark:bg-dark-card rounded-2xl p-4 sm:p-8 mb-8 transition-colors">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900 dark:text-white">
          AI-Powered Character Headcanon Generator
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Side - Input Form */}
          <div className="space-y-4 sm:space-y-6">
            {/* Character Selection */}
            <div>
              <input
                type="text"
                placeholder="Enter character name or choose below..."
                value={selectedCharacter || customCharacter}
                onChange={(e) => {
                  setCustomCharacter(e.target.value)
                  setSelectedCharacter('')
                }}
                className="w-full p-3 sm:p-4 bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-material-green-500 transition-colors"
              />
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mt-4">
                {characters.map((character) => (
                  <button
                    key={character}
                    onClick={() => handleCharacterSelect(character)}
                    className={`p-2 sm:p-3 rounded-lg border transition-all text-xs sm:text-sm ${
                      selectedCharacter === character
                        ? 'bg-material-green-600 border-material-green-500 text-white'
                        : 'bg-white dark:bg-dark-bg border-light-border dark:border-dark-border text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500'
                    }`}
                  >
                    {character}
                  </button>
                ))}
                <button 
                  onClick={handleRandomCharacter}
                  className="p-2 sm:p-3 rounded-lg border border-light-border dark:border-dark-border bg-white dark:bg-dark-bg text-gray-700 dark:text-gray-300 hover:border-material-green-500 dark:hover:border-material-green-500 hover:text-material-green-600 dark:hover:text-material-green-400 transition-all flex items-center justify-center"
                  title="Random Character"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Configuration Options */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-sm sm:text-base text-gray-900 dark:text-white font-medium">Writing Style</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {writingStyles.map((style) => (
                    <button
                      key={style}
                      onClick={() => setWritingStyle(style)}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border transition-all text-xs sm:text-sm ${
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

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-sm sm:text-base text-gray-900 dark:text-white font-medium">Headcanon Type</span>
                </div>
                <select
                  value={headcanonType}
                  onChange={(e) => setHeadcanonType(e.target.value)}
                  className="bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-material-green-500 transition-colors"
                >
                  {headcanonTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-sm sm:text-base text-gray-900 dark:text-white font-medium">Headcanon Length</span>
                </div>
                <select
                  value={headcanonLength}
                  onChange={(e) => setHeadcanonLength(e.target.value)}
                  className="bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-material-green-500 transition-colors"
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
                placeholder="Enter additional details about the character..."
                value={characterDetails}
                onChange={(e) => setCharacterDetails(e.target.value)}
                rows={3}
                className="w-full p-3 sm:p-4 bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-material-green-500 resize-none transition-colors"
              />
            </div>

            {/* Output Format Option */}
            <div className="flex items-center space-x-3">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={outputMarkdown}
                  onChange={(e) => setOutputMarkdown(e.target.checked)}
                  className="w-4 h-4 text-material-green-600 bg-white dark:bg-dark-bg border-light-border dark:border-dark-border rounded focus:ring-material-green-500 focus:ring-2 transition-colors"
                />
                <span className="text-gray-900 dark:text-white text-sm font-medium">
                  Output markdown format
                </span>
              </label>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating || (!selectedCharacter && !customCharacter) || remainingCooldown > 0}
              className="w-full bg-material-green-600 hover:bg-material-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 sm:py-4 sm:px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Generating...</span>
                </>
              ) : remainingCooldown > 0 ? (
                <span>Wait {remainingCooldown}s...</span>
              ) : (
                <span>Generate Headcanon</span>
              )}
            </button>
          </div>

          {/* Right Side - Output */}
          <div className="bg-white dark:bg-dark-bg rounded-lg p-4 sm:p-6 border border-light-border dark:border-dark-border transition-colors">
            {generatedHeadcanon ? (
              <div className="relative">
                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  className="absolute top-0 right-0 bg-material-green-600 hover:bg-material-green-700 text-white p-1.5 sm:p-2 rounded-lg transition-colors flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm font-medium shadow-md"
                  title="Copy to clipboard"
                >
                  {copySuccess ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Copy</span>
                    </>
                  )}
                </button>
                
                {/* Generated Content */}
                <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed pr-16 sm:pr-20 pt-2">
                  {generatedHeadcanon}
                </div>
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