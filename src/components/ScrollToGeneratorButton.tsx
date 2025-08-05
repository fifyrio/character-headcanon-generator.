'use client'

export function ScrollToGeneratorButton() {
  const handleClick = () => {
    const generatorSection = document.querySelector('[data-generator]')
    if (generatorSection) {
      generatorSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button 
      onClick={handleClick}
      className="bg-material-green-600 hover:bg-material-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
    >
      Start Generating Now
    </button>
  )
}