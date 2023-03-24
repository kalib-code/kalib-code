import Head from 'next/head'
import Link from 'next/link'

import {useState} from "react";
import Typical from 'react-typical'
// import { BsLinkedin, BsGithub, BsMedium } from "react-icons/bs";
// import { FaNpm } from "react-icons/fa";


interface Props {
    message: string
}


export default function Home() {

    const [message, setMessage] = useState<Props>({message:""});
    const [chat, setChat] = useState<string>("");
    const [ isFetching, setIsFetching ] = useState<boolean>(false);
    // @ts-ignore
   // const setChatStore = useChatStore(state => state.addMessage());



    const onClick = async ( message:string) => {
        // fetch post
        setIsFetching(true)
        const chatData = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                parentMessageId: null,
                message
            }),
        })

        const data = await chatData.json();
        if(data){
            setIsFetching(false)
            setChat(data.text)
        }
    }
  // @ts-ignore
    return (
    <>
      <Head>
        <title>Kalib-Stack</title>
        <meta name="description" content="Welcome" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
            <header className="flex justify-between items-center py-4">
                <Link href="/" className="text-2xl font-bold">
                    Kalib-Stack
                </Link>

                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="https://kalib-stacks.medium.com/" className="text-lg font-semibold">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

          <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-6xl font-bold">
                    Kalib-Stack
                </h1>
                <p className="mt-3 text-2xl text-center w-1/2">
                    As a full-stack developer with a design background, I create custom digital solutions that are both visually appealing and highly functional. Let&apos;s work together to bring your digital dreams to life!
                </p>
              <label htmlFor="my-modal-4" className="btn mt-5 px-10 py-3">ask me</label>
            </div>
            <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/kalibuas/" className="text-lg font-semibold">
                        LinkedIn
                    </a>
                    <a href="https://kalib-stacks.medium.com/" className="text-lg font-semibold">
                        Medium
                    </a>
                    <a href="https://github.com/kalib-code" className="text-lg font-semibold">
                        Github
                    </a>
                    <a href="https://www.npmjs.com/~marculosus" className="text-lg font-semibold">
                        NPM
                    </a>
                </div>

            </footer>
      </main>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative p-10" htmlFor="">
                {/*// create a input field for email*/}
                {/*logo magnifier*/}
                {/*<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="logo" className="w-1/2 mx-auto" />*/}
                <div className="form-control p-2">
                    <div className="input-group mb-5">
                        <input type="text" placeholder="I am Kalib, Karl AI assistant Ask me anything..." className="input input-bordered w-full" onChange={(e)=>{
                            setMessage({message: e.target.value})
                        }} />

                        <button className="btn btn-square" onClick={ () => onClick(message.message)
                        }>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                    {/*  create a 3 dot animate flashing */}

                    <div>
                        {/*<p>Karl has experience working as a Full-stack Web Developer, a Senior Engineer, a Customer Success Manager, a System Implementation Specialist, a Tech Pastor, and a Senior Pastor. He has knowledge and expertise in various programming languages such as JavaScript, HTML, CSS, PHP, MYSQL, and NoSQL. He has also worked with different frameworks and technologies such as React.js, Next.js, Node.js, Express.js, Koa.js, Micro-Services, AWS, and Azure. Additionally, Karl has participated in Lean Sigma Yellow Belt Class 76 and is certified in Growth Driven Design.</p>*/}
                    </div>

                </div>

                { !isFetching ? <Typical
                    steps={[ chat , 1000]}
                    wrapper="p"
                />  : '' }
            </label>

        </label>
    </>
  )
}
