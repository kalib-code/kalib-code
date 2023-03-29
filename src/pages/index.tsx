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
    const [messageParentId, setMessageParentId] = useState<string | null>(null);

    const onClick = async (message: string) => {
        setIsFetching(true)
        try {
            const chatData = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    parentMessageId: messageParentId ? messageParentId : null,
                    message
                }),
            })

            const data = await chatData.json();
            if (data) {
                setIsFetching(false)
                setChat(data.text)
                setMessageParentId(data.parentMessageId)
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
                <title>Karl Kenneth Alibuas - Full Stack Developer</title>
                <meta name="description"
                      content="Explore the professional journey of Karl Kenneth Alibuas, a skilled full-stack developer with expertise in JavaScript, HTML, CSS, PHP, MySQL, and NoSQL. Discover his experience in tech, including web development projects, software engineering, and his unique role as a Tech Pastor."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/a.png"/>
            </Head>
            <main className="container mx-auto">
                <Header/>
                <div className="hero min-h-screen bg-base-100">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold"><span className="text-orange-500">.</span>Alibuas</h1>
                            <p className="py-6">  As a full-stack developer with a design background, I create custom digital solutions that are
                                both visually appealing and highly functional. Let&apos;s work together to bring your digital
                                dreams to life!</p>
                            <label htmlFor="my-modal-4" className="btn btn-primary"> <span className="text-orange-500">.</span>
                                ask Kalib</label>
                        </div>
                    </div>
                </div>
                <Footer/>
            </main>
            <Modal message={message} isOpen={isOpen} isFetching={isFetching} setMessage={setMessage} onClick={onClick}
                   chat={chat} onClickModal={onClickModal}/>
        </>
    )
}
