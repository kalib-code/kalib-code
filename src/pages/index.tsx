import Head from 'next/head'
import {useState} from "react";
import {Header, Footer, Modal} from "../../components";


interface Props {
    message: string
}


export default function Home() {

    const [message, setMessage] = useState<Props>({message: ""});
    const [chat, setChat] = useState<string | null>(null);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onClick = async (message: string) => {
        setIsFetching(true)
        try {
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
            if (data) {
                setIsFetching(false)
                setChat(data.text)
            }

        } catch (e) {
            console.log(e)
            setIsFetching(false)
            setChat('Sorry, I am not available right now. Please try again later.')
        }

    }

    const onClickModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Head>
                <title>Karl Kenneth Alibuas - Full Stack Developer & Tech Pastor</title>
                <meta name="description"
                      content="Explore the professional journey of Karl Kenneth Alibuas, a skilled full-stack developer with expertise in JavaScript, HTML, CSS, PHP, MySQL, and NoSQL. Discover his experience in tech, including web development projects, software engineering, and his unique role as a Tech Pastor."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/a.png"/>
            </Head>
            <main className="container mx-auto">
                <Header/>
                <div className="flex flex-col items-center justify-center min-h-screen py-2">
                    <h1 className="text-6xl font-bold">
                        <span className="text-orange-500">.</span>Alibuas
                    </h1>
                    <p className="mt-3 text-2xl text-center w-1/2">
                        As a full-stack developer with a design background, I create custom digital solutions that are
                        both visually appealing and highly functional. Let&apos;s work together to bring your digital
                        dreams to life!
                    </p>
                    <label onClick={() => {
                        onClickModal()
                    }} htmlFor="my-modal-4" className="btn mt-5 px-10 py-3"> <span className="text-orange-500">.</span>
                        ask me</label>
                </div>
                <Footer/>
            </main>
            <Modal message={message} isOpen={isOpen} isFetching={isFetching} setMessage={setMessage} onClick={onClick}
                   chat={chat} onClickModal={onClickModal}/>
        </>
    )
}
