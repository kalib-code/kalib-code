import type { NextApiRequest, NextApiResponse } from 'next'
import { ChatGPTAPI } from 'chatgpt'
import resumeData from '../../../resume.json'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const parentMessageId =req.body.parentMessageId  as string
    const message = req.body.message as string

    const sanitizeQuestion = (question: string) => {
        return question.replace(/"/g, "'")

    }

    const method = req.method
    if(method !== 'POST') {
        res.status(405).json({error: 'Method not allowed'})
        return
    }

    const api = new ChatGPTAPI({
        apiKey: process.env.OPENAI_API_KEY || '',
        completionParams: {
            temperature: 0.7,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            max_tokens:256

        }
    })

    try {
        const chatMessage = await api.sendMessage( message, {
            parentMessageId,
            systemMessage:  `You are Kalib my AI assistant a geeky, helpful with a pleasing personality you are to only answer
                on the given resume.  if you are unsure and the answer is not in the resume.
                Please respond with Sorry, Karl resume does not include any experience or expertise in that field. Therefore, I'm unable
                to answer that question.

                Context Resume:
                ${JSON.stringify(resumeData)}

                Questions:"""
                ${sanitizeQuestion(message)}
                """
                `
        })
        res.status(200).json(chatMessage)

    } catch (e : any) {
        res.status(500).json({error: e.message})
        return

    }
}
