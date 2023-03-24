import Head from 'next/head'
import Link from 'next/link'

import {useState} from "react";
import Typical from 'react-typical'
import { BsLinkedin, BsGithub, BsMedium } from "react-icons/bs";
import { FaNpm } from "react-icons/fa";



interface Props {
    message: string
}


export default function Home() {

    const [message, setMessage] = useState<Props>({message:""});
    const [chat, setChat] = useState<string | null>(null);
    const [ isFetching, setIsFetching ] = useState<boolean>(false);

    const onClick = async ( message:string) => {
        // fetch post
        setIsFetching(true)
        const chatData = await fetch('/api/chat', {
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
    // @ts-ignore
    return (
    <>
      <Head>
        <title>Karl Kenneth Alibuas - Full Stack Developer & Tech Pastor</title>
        <meta name="description" content="Explore the professional journey of Karl Kenneth Alibuas, a skilled full-stack developer with expertise in JavaScript, HTML, CSS, PHP, MySQL, and NoSQL. Discover his experience in tech, including web development projects, software engineering, and his unique role as a Tech Pastor." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/a.png" />
      </Head>
      <main className="container mx-auto">
            <header className="flex justify-between items-center py-4">
                <Link href="/" className="text-2xl font-bold">
                    <span className="text-orange-500">.</span>Alibuas
                </Link>

                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="https://kalib-stacks.medium.com/" className="text-lg font-semibold">
                                <span className="text-orange-500">.</span>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

          <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-6xl font-bold">
                    <span className="text-orange-500">.</span>Alibuas
                </h1>
                <p className="mt-3 text-2xl text-center w-1/2">
                    As a full-stack developer with a design background, I create custom digital solutions that are both visually appealing and highly functional. Let&apos;s work together to bring your digital dreams to life!
                </p>
              <label htmlFor="my-modal-4" className="btn mt-5 px-10 py-3"> <span className="text-orange-500">.</span>ask me</label>
            </div>
            <footer className="flex flex-col items-center justify-center w-full h-24 mb-10">
                <p className="text-lg font-normal mb-5">
                    Stalk me<span className="text-orange-500">.</span>
                </p>
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/kalibuas/" className="text-lg font-semibold">
                        <BsLinkedin size={50} />
                    </a>
                    <a href="https://kalib-stacks.medium.com/" className="text-lg font-semibold">
                        <BsMedium size={50} />
                    </a>
                    <a href="https://github.com/kalib-code" className="text-lg font-semibold">
                        <BsGithub size={50} />
                    </a>
                    <a href="https://www.npmjs.com/~marculosus" className="text-lg font-semibold">
                        <FaNpm size={50} />
                    </a>
                </div>

            </footer>
      </main>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative p-10" htmlFor="">
                <div className="form-control p-2">
                    <div className="input-group mb-5">
                        <input type="text" placeholder="Ask me about Karl" className="input input-bordered w-full" onChange={(e)=>{
                            setMessage({message: e.target.value})
                        }}
                               onKeyDown={ async (event)=>{
                                      if(event.key === 'Enter'){
                                        await onClick(message.message)
                                      }

                               }}
                        />

                        <button className="btn btn-square" onClick={ () => onClick(message.message)
                        }>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                    { !isFetching ? <Typical
                        steps={[ chat as string , 1000 ] }
                    />  : 'Loading...' }
                </div>

            </label>

        </label>
    </>
  )
}
