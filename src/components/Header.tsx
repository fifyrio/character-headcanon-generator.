'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  // Initialize dark mode on component mount
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <header className="flex items-center justify-between p-6 bg-white dark:bg-dark-bg border-b border-light-border dark:border-dark-border transition-colors">
      <div className="flex items-center space-x-2">
        <Image
          src="/logo.svg"
          alt="AI Character Headcanon Generator"
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </div>
      
      <div className="flex items-center space-x-6">
        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <Link 
            href="/" 
            className="text-gray-700 dark:text-gray-300 hover:text-material-green-600 dark:hover:text-material-green-400 transition-colors font-medium"
          >
            Home
          </Link>
          <Link 
            href="/relationship-headcanon-generator" 
            className="text-gray-700 dark:text-gray-300 hover:text-material-green-600 dark:hover:text-material-green-400 transition-colors font-medium"
          >
            Relationship Generator
          </Link>
        </nav>
        
        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleDarkMode}
          className="w-8 h-8 rounded-full bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border flex items-center justify-center hover:border-material-green-500 transition-colors"
          title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? (
            <svg className="w-4 h-4 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}