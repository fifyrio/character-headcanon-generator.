'use client'

import { useState, useEffect } from 'react'

const relationshipTypes = [
  'Romantic - Secret Crush',
  'Romantic - Enemies to Lovers',
  'Romantic - Best Friends to Lovers',
  'Romantic - Star-crossed Lovers',
  'Friendship - Best Friends',
  'Friendship - Rivals to Friends',
  'Family - Siblings',
  'Family - Parent/Child',
  'Mentor/Student',
  'Rivals/Enemies',
  'Teammates/Partners'
]

const storyTypes = [
  { name: 'Comedy', icon: '😄' },
  { name: 'Fantasy', icon: '🧙‍♂️' },
  { name: 'Sci-Fi', icon: '🚀' },
  { name: 'Romance', icon: '💕' },
  { name: 'Adventure', icon: '⚔️' },
  { name: 'Mystery', icon: '🕵️' },
  { name: 'Drama', icon: '🎭' },
  { name: 'Horror', icon: '👻' }
]

const languages = [
  { value: 'en', label: 'English' },
  { value: 'zh', label: '中文' },
  { value: 'ja', label: '日本語' },
  { value: 'ko', label: '한국어' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
  { value: 'pt', label: 'Português' }
]

// Popular character suggestions
const popularCharacters = [
  'Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Draco Malfoy',
  'Spider-Man', 'Iron Man', 'Captain America', 'Black Widow',
  'Batman', 'Superman', 'Wonder Woman', 'The Flash',
  'Luke Skywalker', 'Princess Leia', 'Han Solo', 'Darth Vader',
  'Sherlock Holmes', 'John Watson', 'Moriarty',
  'Frodo Baggins', 'Gandalf', 'Aragorn', 'Legolas',
  'Jon Snow', 'Daenerys Targaryen', 'Tyrion Lannister', 'Arya Stark',
  'Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Kakashi',
  'Elsa', 'Anna', 'Olaf', 'Kristoff'
]

export default function RelationshipGenerator() {
  const [firstCharacter, setFirstCharacter] = useState('')
  const [secondCharacter, setSecondCharacter] = useState('')
  const [relationshipType, setRelationshipType] = useState(relationshipTypes[0])
  const [selectedStoryTypes, setSelectedStoryTypes] = useState<string[]>(['Comedy'])
  const [language, setLanguage] = useState('en')
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [additionalDetails, setAdditionalDetails] = useState('')
  const [generatedStory, setGeneratedStory] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [lastGenerateTime, setLastGenerateTime] = useState(0)
  const [remainingCooldown, setRemainingCooldown] = useState(0)
  const [copySuccess, setCopySuccess] = useState(false)

  // Character suggestions state
  const [showFirstSuggestions, setShowFirstSuggestions] = useState(false)
  const [showSecondSuggestions, setShowSecondSuggestions] = useState(false)
  const [firstCharacterSuggestions, setFirstCharacterSuggestions] = useState<string[]>([])
  const [secondCharacterSuggestions, setSecondCharacterSuggestions] = useState<string[]>([])

  // Cooldown timer effect
  useEffect(() => {
    if (remainingCooldown > 0) {
      const timer = setTimeout(() => {
        setRemainingCooldown(remainingCooldown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [remainingCooldown])

  // Filter character suggestions based on input
  const filterSuggestions = (input: string) => {
    if (!input) return popularCharacters.slice(0, 6)
    return popularCharacters.filter(char => 
      char.toLowerCase().includes(input.toLowerCase())
    ).slice(0, 6)
  }

  const handleFirstCharacterChange = (value: string) => {
    setFirstCharacter(value)
    setFirstCharacterSuggestions(filterSuggestions(value))
    setShowFirstSuggestions(value.length > 0)
  }

  const handleSecondCharacterChange = (value: string) => {
    setSecondCharacter(value)
    setSecondCharacterSuggestions(filterSuggestions(value))
    setShowSecondSuggestions(value.length > 0)
  }

  const handleStoryTypeToggle = (storyType: string) => {
    setSelectedStoryTypes(prev => {
      if (prev.includes(storyType)) {
        return prev.filter(type => type !== storyType)
      } else {
        return [...prev, storyType]
      }
    })
  }

  const handleRandomPair = () => {
    const shuffled = [...popularCharacters].sort(() => 0.5 - Math.random())
    setFirstCharacter(shuffled[0])
    setSecondCharacter(shuffled[1])
    setShowFirstSuggestions(false)
    setShowSecondSuggestions(false)
  }

  const handleGenerate = async () => {
    const currentTime = Date.now()
    const timeSinceLastGenerate = currentTime - lastGenerateTime
    const cooldownTime = 5000 // 5 seconds

    if (timeSinceLastGenerate < cooldownTime) {
      const remaining = Math.ceil((cooldownTime - timeSinceLastGenerate) / 1000)
      setRemainingCooldown(remaining)
      return
    }

    setIsGenerating(true)
    setGeneratedStory('')
    setLastGenerateTime(currentTime)
    setRemainingCooldown(0)
    
    try {
      const response = await fetch('/api/generate-relationship', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstCharacter,
          secondCharacter,
          relationshipType,
          storyTypes: selectedStoryTypes,
          language,
          additionalDetails,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to generate relationship story')
      }

      const data = await response.json()
      setGeneratedStory(data.story)
    } catch (error) {
      console.error('Error generating relationship story:', error)
      setGeneratedStory(
        `Sorry, there was an error generating the relationship story. ${error instanceof Error ? error.message : 'Please try again.'}`
      )
    } finally {
      setIsGenerating(false)
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedStory)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = generatedStory
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
      <div className="bg-light-card dark:bg-dark-card rounded-2xl p-4 sm:p-8 mb-8 transition-colors shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Side - Input Form */}
          <div className="space-y-6">
            {/* Character Inputs */}
            <div className="space-y-4">
              {/* First Character */}
              <div className="relative">
                <label className="block text-gray-900 dark:text-white font-medium mb-2">
                  First Character
                </label>
                <input
                  type="text"
                  placeholder="Enter first character name"
                  value={firstCharacter}
                  onChange={(e) => handleFirstCharacterChange(e.target.value)}
                  onFocus={() => setShowFirstSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowFirstSuggestions(false), 200)}
                  className="w-full p-4 bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-material-green-500 transition-colors"
                />
                
                {showFirstSuggestions && firstCharacterSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg mt-1 shadow-lg z-10 max-h-48 overflow-y-auto">
                    {firstCharacterSuggestions.map((char) => (
                      <button
                        key={char}
                        onClick={() => {
                          setFirstCharacter(char)
                          setShowFirstSuggestions(false)
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-light-card dark:hover:bg-dark-bg text-gray-900 dark:text-white transition-colors"
                      >
                        {char}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Second Character */}
              <div className="relative">
                <label className="block text-gray-900 dark:text-white font-medium mb-2">
                  Second Character
                </label>
                <input
                  type="text"
                  placeholder="Enter second character name"
                  value={secondCharacter}
                  onChange={(e) => handleSecondCharacterChange(e.target.value)}
                  onFocus={() => setShowSecondSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSecondSuggestions(false), 200)}
                  className="w-full p-4 bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-material-green-500 transition-colors"
                />
                
                {showSecondSuggestions && secondCharacterSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg mt-1 shadow-lg z-10 max-h-48 overflow-y-auto">
                    {secondCharacterSuggestions.map((char) => (
                      <button
                        key={char}
                        onClick={() => {
                          setSecondCharacter(char)
                          setShowSecondSuggestions(false)
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-light-card dark:hover:bg-dark-bg text-gray-900 dark:text-white transition-colors"
                      >
                        {char}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Random Pair Button */}
              <button 
                onClick={handleRandomPair}
                className="flex items-center space-x-2 text-material-green-400 hover:text-material-green-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-sm font-medium">🎲</span>
              </button>
            </div>

            {/* Relationship Type */}
            <div>
              <label className="block text-gray-900 dark:text-white font-medium mb-2">
                Relationship Type
              </label>
              <div className="relative">
                <select
                  value={relationshipType}
                  onChange={(e) => setRelationshipType(e.target.value)}
                  className="w-full p-4 bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-material-green-500 transition-colors appearance-none"
                >
                  {relationshipTypes.map((type) => (
                    <option key={type} value={type} className="bg-white dark:bg-dark-bg text-gray-900 dark:text-white">
                      {type}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Story Type */}
            <div>
              <label className="block text-gray-900 dark:text-white font-medium mb-3">
                Story Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {storyTypes.map((type) => (
                  <button
                    key={type.name}
                    onClick={() => handleStoryTypeToggle(type.name)}
                    className={`p-3 rounded-lg border transition-all text-sm font-medium flex flex-col items-center space-y-1 ${
                      selectedStoryTypes.includes(type.name)
                        ? 'bg-material-green-600 border-material-green-500 text-white'
                        : 'bg-white dark:bg-dark-bg border-light-border dark:border-dark-border text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500'
                    }`}
                  >
                    <span className="text-lg">{type.icon}</span>
                    <span>{type.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Advanced Settings */}
            <div>
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center justify-between w-full p-3 bg-transparent border-none text-gray-900 dark:text-white hover:text-material-green-500 transition-colors"
              >
                <span className="font-medium">Advanced Setting</span>
                <svg 
                  className={`w-5 h-5 transform transition-transform ${showAdvanced ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showAdvanced && (
                <div className="space-y-4 pt-4">
                  {/* Language */}
                  <div>
                    <label className="block text-gray-900 dark:text-white font-medium mb-2">
                      Language
                    </label>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full p-3 bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-material-green-500 transition-colors appearance-none"
                    >
                      {languages.map((lang) => (
                        <option key={lang.value} value={lang.value} className="bg-white dark:bg-dark-bg text-gray-900 dark:text-white">
                          {lang.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Additional Details */}
                  <div>
                    <label className="block text-gray-900 dark:text-white font-medium mb-2">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      placeholder="Add any specific details, setting, or context for the relationship story..."
                      value={additionalDetails}
                      onChange={(e) => setAdditionalDetails(e.target.value)}
                      rows={3}
                      className="w-full p-3 bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-material-green-500 resize-none transition-colors"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !firstCharacter || !secondCharacter || remainingCooldown > 0}
              className="w-full bg-material-green-600 hover:bg-material-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Generating...</span>
                </>
              ) : remainingCooldown > 0 ? (
                <span>Wait {remainingCooldown}s...</span>
              ) : (
                <>
                  <span>🪄</span>
                  <span>Weave Their Story Together</span>
                </>
              )}
            </button>
          </div>

          {/* Right Side - Output */}
          <div className="bg-white dark:bg-dark-bg rounded-lg p-6 border border-light-border dark:border-dark-border transition-colors">
            {generatedStory ? (
              <div className="relative">
                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  className="absolute top-0 right-0 bg-material-green-600 hover:bg-material-green-700 text-white p-2 rounded-lg transition-colors flex items-center space-x-2 text-sm font-medium shadow-md"
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
                <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed pr-20 pt-2">
                  {generatedStory}
                </div>
              </div>
            ) : (
              <div className="text-gray-500 text-center py-12">
                The generated relationship story will be displayed here...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}