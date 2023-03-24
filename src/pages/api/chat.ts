import type { NextApiRequest, NextApiResponse } from 'next'
import { ChatGPTAPI } from 'chatgpt'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const parentMessageId =req.body.parentMessageId  as string
    const message = req.body.message as string

    const method = req.method
    if(method !== 'POST') {
        res.status(405).json({error: 'Method not allowed'})
        return
    }

    const api = new ChatGPTAPI({
        apiKey: process.env.OPENAI_API_KEY || '',
        debug: true,
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
            // @ts-ignore
            parentMessageId,
            systemMessage:  "You are Kalib my AI assistant a geeky, helpful with a pleasing personality you are to only answer based on the resume if your question is not related to the resume or does not the topic within the resume just respond with Sorry, Karl resume does not include any experience or expertise in that field. Therefore, I'm unable to answer that question. you can use emoji in all of your answer if needed \" \n" +
                "\n" +
                "here is my work resume \n" +
                "\n" +
                "Karl Kenneth Alibuas\n" +
                "New Road Banica Mendoza Subdivision\n" +
                "Roxas City, Capiz 5800\n" +
                "\n" +
                "+63 9951783112\n" +
                "karl@alibuas.com\n" +
                "Github: https://github.com/kalib-code\n" +
                "Linkedin: https://www.linkedin.com/in/kalibuas/\n" +
                "Blog: https://medium.com/@kalib-stacks\n" +
                "NPM: https://www.npmjs.com/~marculosus\n" +
                "\n" +
                "\n" +
                "\n" +
                "Program Language: Javascript, HTML, CSS , PHP, MYSQL, NoSQL\n" +
                "Frameworks  /  Tech: \n" +
                "Front-end:  React.js, Next,js\n" +
                "Libaries: Material-UI, Tailwind, Ant-Design , Prisma.js\n" +
                "Back-end: Node.js, Express.js, Koa.js, Micro-Services\n" +
                "Services: AWS Web services, Azure\n" +
                "CI/CD: Github\n" +
                "Colab tools: Jira, Azure\n" +
                "Training:  Lean  Sigma Yellow Belt Class 76 \n" +
                "Certificate : Growth Driven Design\n" +
                "\n" +
                "\n" +
                "\n" +
                "ERNI Betterask.erni/PH /  Professional Web  Developer \n" +
                "( Full-stack )\n" +
                "AUG 2021 - Present, Mandaluyong Philippines\n" +
                " Building and maintaining backend applications for projects,\n" +
                "Writing codes with efficiency, speed of current application, and writing high-quality code. \n" +
                "PROJECT: \n" +
                "Singlife Senior NODE JS  Typescript Engineer \n" +
                "FinTech and Insurance, \n" +
                "May 2022 - Present, BGC Philippines\n" +
                "Responsible for creating and maintaining their product on their serverless application( AWS), responsible for creating tools and services using AWS services and serverless application.\n" +
                "Project : \n" +
                "Adhock Anti-Money Laundering declaration notification email (Lead)\n" +
                "3n1 Protection Plan product (Lead)\n" +
                "Cash Back Promo (Lead)\n" +
                "Application Data Capture (Product Manager)\n" +
                "Recurring Payments and Notification (Lead Dev & Product Manager)\n" +
                "\n" +
                "\n" +
                "HERMA  Project: Shipping yard company  Responsible in develop a REST API backend application that will cater to both mobile and web applications\n" +
                "AVA Project: Responsible for IoT data integration for frontend using react \n" +
                "ThomsonMedical: adding backend new feature on generating document report and integrating it on other existing services.\n" +
                "Erni Development Day participate in every EDD  2 times since I was hired. My topics\n" +
                "No code and LowCode and their importance\n" +
                "Building better software with REFINE.dev which I am an active contributor. \n" +
                "\n" +
                "\n" +
                " Metro City AI  Senior Engineer \n" +
                "( Consultant - Freelance )\n" +
                "Productivity Tool for HR using Artificial Intelligence.\n" +
                "Sept  2022 - Feb 2023, Makati Philippines\n" +
                "Responsible for creating Full stack video-on-demand applications using nextjs and AWS web services. To design and implement its POC\n" +
                "\n" +
                "UPDATE PROMISE  Fullstack Designer / Web Developer\n" +
                "(Freelance)\n" +
                "AUG 2021\n" +
                "Update promise is an on-demand digital solution for payment based in the US, My job was to design and create a new website design for their digital campaigns using WordPress. \n" +
                "\n" +
                "\n" +
                "Mcdonald Delivery System Call Solution (MDS-CSI)  / Junior Web Developer\n" +
                "JUNE  2020 - AUG 2021,  Makati Philippines\n" +
                "I designed and developed an online ordering website for restaurants Using WordPress as a front-end and developed custom Plugins for API Integration with the company's Order Management System. \n" +
                "Planned and Implemented their  API Structures on WordPress to Order management system which resulted in fewer API calls that save resources on the browsers and fully utilized WordPress Functions.\n" +
                "Help planned to migrate the order management system from an igniter to a Serverless application and have it implemented as a SaaS application for future products. \n" +
                "\n" +
                "Servio.ph / Customer Success Manager\n" +
                " JANUARY  2020 - JUNE  2020,  Eastwood Quezon City\n" +
                "Designed  Information Architecture gathering for Product Offerings and Designed Service Implementation Workflow on Web Development Projects \n" +
                "Help Create aggressive Marketing materials and marketing Strategies with the Marketing department.\n" +
                "Handle Client communication and projects.  \n" +
                "Product research and Developing Product offerings.\n" +
                "Help Train and develop aspiring students as a result 40 of my students have a job offer after the training.  \n" +
                "Servio.ph / System Implementation Specialist\n" +
                "JANUARY  2019 - JANUARY 2020,  Roxas City Capiz\n" +
                "Create and Implement Solutions for small businesses on digital transformation for digital marketing. \n" +
                "\n" +
                "Tech Pastor / Destiny City Church (FARMinc)\n" +
                "JANUARY  2018 - JANUARY 2019,  Roxas City Capiz\n" +
                "Design digital people experience and help build a digital presence for prospects both online and offline. And build digital tools for churches. \n" +
                "\n" +
                "Senior Pastor / First Assemble Metro Evangel\n" +
                "MARCH  2014- 2018 Santiago, Isabela\n" +
                "After serving 1 year as an assistant pastor In san juan ilocos sur. I was assigned to serve as a senior pastor of a church in Santiago city.\n" +
                "Leading and planning volunteers for church tasks and creating relevant events that can help their growth in the church.  \n" +
                "\n" +
                "\n" +
                "\n" +
                "North Eastern College / AB Political Science Under-grad\n" +
                "OCTOBER  2013 -  MARCH  2014,  Santiago, Isabela\n" +
                "Berean School of Ministries  / Church Planting\n" +
                "JUNE 2010 - MARCH 2011,  Roxas City Capiz\n" +
                "Colegio De la Purísima Concepción \n" +
                "JUNE 2009 - MARCH 2010,  Roxas City Capiz\n" +
                "\n" +
                "Tanque National High School\n" +
                "JUNE 2006 - JUNE 2009 ,  Roxas City Capiz\n" +
                "\n"
        })
        res.status(200).json(chatMessage)

    } catch (e : any) {
        res.status(500).json({error: e.message})
        return

    }
}
