import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from "openai";
import resumeData from '../../../resume.json'

// create a custom logger for vercel logs to see
const logger = console;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const message = req.body.message as string
    const jsonData = JSON.stringify(resumeData)


    const method = req.method
    if(method !== 'POST') {
        res.status(405).json({error: 'Method not allowed'})
        return
    }

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const systemPrompt = `You are Kalib my AI assistant a geeky, helpful with a pleasing personality you are to only answer
                on the given resume.  if you are unsure and the answer is not in the resume.
                Please respond with Sorry, Karl resume does not include any experience or expertise in that field. Therefore, I'm unable
                to answer that question.
                Context Resume:
                ${jsonData}`
    try {

        const chatMes = await openai.createChatCompletion({
            model:"gpt-3.5-turbo",
            messages: [{role: "system", content: systemPrompt},{role: "user", content: message}],

        });

        logger.log(`${new Date().toISOString()} - ${message} - ${chatMes.data}`)
        return res.status(200).json({message: chatMes.data})


    } catch (e : any) {
        logger.error(`${new Date().toISOString()} - ${message} - ${e.message}`)
        res.status(500).json({error: e.message})
        return

    }
}
