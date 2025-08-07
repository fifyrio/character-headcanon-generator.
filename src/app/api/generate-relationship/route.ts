import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { firstCharacter, secondCharacter, relationshipType, storyTypes, language, additionalDetails } = await request.json()

    if (!firstCharacter || !secondCharacter) {
      return NextResponse.json(
        { error: 'Both character names are required' },
        { status: 400 }
      )
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      )
    }

    // Create a detailed prompt based on user inputs
    const relationshipTypeMap: { [key: string]: string } = {
      'Romantic - Secret Crush': 'a secret crush dynamic where one or both characters harbor hidden romantic feelings',
      'Romantic - Enemies to Lovers': 'an enemies to lovers romance where initial conflict transforms into deep love',
      'Romantic - Best Friends to Lovers': 'a transition from close friendship to romantic love',
      'Romantic - Star-crossed Lovers': 'a tragic or challenged romance between characters from different worlds or circumstances',
      'Friendship - Best Friends': 'a deep, loyal friendship with mutual support and understanding',
      'Friendship - Rivals to Friends': 'a relationship that evolves from rivalry to genuine friendship',
      'Family - Siblings': 'a sibling relationship with all its complexity, love, and occasional conflict',
      'Family - Parent/Child': 'a parent-child dynamic with care, guidance, and generational differences',
      'Mentor/Student': 'a teaching relationship where one character guides and influences the other',
      'Rivals/Enemies': 'an antagonistic relationship filled with conflict and competition',
      'Teammates/Partners': 'a professional or mission-based partnership requiring cooperation and trust'
    }

    const storyGenreContext = storyTypes.length > 0 ? 
      `The story should incorporate elements from these genres: ${storyTypes.join(', ')}. ` : ''

    const languageMap: { [key: string]: string } = {
      'en': 'English',
      'zh': 'Chinese',
      'ja': 'Japanese',
      'ko': 'Korean',
      'es': 'Spanish',
      'fr': 'French',
      'de': 'German',
      'pt': 'Portuguese'
    }

    const targetLanguage = languageMap[language] || 'English'
    const languageInstruction = language !== 'en' ? 
      `Please write the entire response in ${targetLanguage}. ` : ''

    const prompt = `Create an engaging relationship headcanon between ${firstCharacter} and ${secondCharacter} exploring ${relationshipTypeMap[relationshipType] || relationshipType}.

${storyGenreContext}${languageInstruction}

${additionalDetails ? `Additional context: ${additionalDetails}` : ''}

Write a creative story or scenario (2-4 paragraphs) that:
1. Shows the unique dynamic between these two characters
2. Includes specific moments, dialogue, or situations that illustrate their relationship
3. Captures their individual personalities while exploring how they interact
4. Creates an engaging narrative that fans would enjoy reading

Make it emotionally resonant and true to the characters while adding interesting new details about their relationship. Focus on showing rather than just telling about their connection.`

    const systemPrompt = language !== 'en' ? 
      `You are a creative writer who specializes in creating engaging character relationship stories. Write your response entirely in ${targetLanguage}. Your stories should be original, emotionally engaging, and true to the characters while exploring their unique relationship dynamics.` :
      "You are a creative writer who specializes in creating engaging character relationship stories. Your stories should be original, emotionally engaging, and true to the characters while exploring their unique relationship dynamics."

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 600,
      temperature: 0.8,
    })

    const story = completion.choices[0]?.message?.content

    if (!story) {
      return NextResponse.json(
        { error: 'Failed to generate relationship story' },
        { status: 500 }
      )
    }

    return NextResponse.json({ story })

  } catch (error) {
    console.error('Error generating relationship story:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}