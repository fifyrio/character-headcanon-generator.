/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a1a',
        'dark-card': '#2a2a2a',
        'dark-border': '#404040',
        'light-bg': '#ffffff',
        'light-card': '#f8f9fa',
        'light-border': '#e5e7eb',
        'material-green': {
          50: '#E8F5E8',
          100: '#C8E6C8',
          200: '#A5D6A5',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50',
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
        },
      },
    },
  },
  plugins: [],
}

