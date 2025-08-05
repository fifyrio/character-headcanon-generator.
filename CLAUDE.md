# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a character headcanon generator project that appears to be in its initial setup phase. The repository currently contains only documentation files and is set up as a Node.js project based on the directory name and technology stack specification.

## Technology Stack

Based on the 技术栈.md file, this project is planned to use:

- **Next.js 14.0.1** - React full-stack framework with SSR/SSG capabilities
- **React 18.2.0** - Frontend UI library  
- **TypeScript 5.2.2** - Type-safe superset of JavaScript
- **Tailwind CSS 3.3.5** - Utility-first CSS framework
- **PostCSS** - CSS processing tool
- **SCSS/Sass** - CSS preprocessor
- **AOS 2.3.4** - Scroll animation library
- **Swiper 11.0.3** - Touch slider component
- **FSLightbox React** - Lightbox/modal component
- **RemixIcon** - Icon library
- **Vercel Analytics** - Site analytics
- **Vercel Speed Insights** - Performance monitoring
- **ESLint** - Code quality and linting tool

## Project Status

⚠️ **Note**: This project is currently in its initial state with only documentation files present. The actual codebase (package.json, source files, configuration files) has not yet been created. 

When implementing this project, you should:
1. Initialize a Next.js project with TypeScript
2. Set up the specified dependencies from the technology stack
3. Configure Tailwind CSS, ESLint, and other tools
4. Implement the character headcanon generator functionality

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Copy `.env.example` to `.env.local` and configure:
- `OPENAI_API_KEY` - Your OpenAI API key for GPT-4o-mini model

## API Routes

- `POST /api/generate-headcanon` - Generate character headcanons using OpenAI GPT-4o-mini

## File Structure

The project currently contains:
- `README.md` - Basic project description
- `技术栈.md` - Technology stack documentation (in Chinese)
- `CLAUDE.md` - This file

Once initialized, typical Next.js structure should be followed with components in appropriate directories.