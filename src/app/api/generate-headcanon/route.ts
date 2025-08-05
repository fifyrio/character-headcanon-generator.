import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { character, writingStyle, headcanonType, headcanonLength, characterDetails, outputMarkdown } = await request.json()

    if (!character) {
      return NextResponse.json(
        { error: 'Character name is required' },
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
    const lengthMap = {
      'Very Short': '1-2 sentences',
      'Short': '1 short paragraph (3-4 sentences)',
      'Medium': '2-3 paragraphs',
      'Long': '4-5 detailed paragraphs'
    }

    const styleMap = {
      'Normal': 'in a balanced, engaging tone',
      'Funny': 'with humor and wit, making it entertaining',
      'Dark': 'with a darker, more serious or mysterious tone'
    }

    const typeMap = {
      'Personality Traits': 'focusing on their personality, quirks, habits, and behavioral patterns',
      'Background Story': 'focusing on their past, origin story, family history, or significant life events',
      'Relationships': 'focusing on their relationships with other characters, family, friends, or romantic interests',
      'Skills & Abilities': 'focusing on their talents, abilities, skills, or special powers'
    }

    const prompt = `Create a character headcanon for ${character} ${typeMap[headcanonType as keyof typeof typeMap]} ${styleMap[writingStyle as keyof typeof styleMap]}. 

The headcanon should be ${lengthMap[headcanonLength as keyof typeof lengthMap]} long.

${characterDetails ? `Additional context about the character: ${characterDetails}` : ''}

Make it creative, engaging, and true to the character while adding new interesting details that fans would enjoy. Focus on ${headcanonType.toLowerCase()} and write it ${writingStyle.toLowerCase() === 'normal' ? 'in a balanced way' : writingStyle.toLowerCase() === 'funny' ? 'with humor' : 'with a darker tone'}.

${outputMarkdown ? 'Format the output in markdown with appropriate headers, bold text, and formatting to make it visually appealing and well-structured.' : 'Provide the output as plain text without any special formatting.'}`

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a creative writer who specializes in creating engaging character headcanons for fictional characters. Your headcanons should be original, creative, and true to the character while adding interesting new details that fans would appreciate."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: headcanonLength === 'Long' ? 800 : headcanonLength === 'Medium' ? 400 : headcanonLength === 'Short' ? 200 : 100,
      temperature: 0.8,
    })

    const headcanon = completion.choices[0]?.message?.content

    if (!headcanon) {
      return NextResponse.json(
        { error: 'Failed to generate headcanon' },
        { status: 500 }
      )
    }

    return NextResponse.json({ headcanon })

  } catch (error) {
    console.error('Error generating headcanon:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}