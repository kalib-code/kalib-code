import { BsFillSendFill } from "react-icons/bs";

import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";


interface Props {
    message: any
    isOpen: boolean
    isFetching: boolean
    setMessage: any
    onClick: (message: string) => void
    chat: string | null
    onClickModal: () => void
}


export const Modal = (props: Props) => {

    const { message, isOpen, isFetching, setMessage, onClick, chat, onClickModal } = props;

    const onChangeToggle = (e: any) => {
        onClickModal()
    }

    return (
        <>
            <input onChange={onChangeToggle} defaultChecked={isOpen} type="checkbox" id="my-modal-4"
                className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative p-5" htmlFor="">
                    <div className="form-control mb-20">
                        <div className="input-group mb-5">
                            <input type="text" data-umami-event="Ask Kalib" data-umami-event-question="askQuestion" placeholder="Ask me about Karl" className="input input-bordered w-full"
                                onChange={(e) => {
                                    setMessage(e.target.value)
                                }}
                                onKeyDown={async (event) => {
                                    if (event.key === 'Enter') {
                                        await onClick(message)
                                    }

                                }}
                            />

                            <button className="btn btn-square" onClick={() => onClick(message)
                            }>
                                <BsFillSendFill />
                            </button>
                        </div>
                        {!isFetching ? <article className="prose-base">
                            <TypeAnimation
                                sequence={

                                    [chat as string, 1000, () => { console.log('done') }]}
                                wrapper={"p"}
                                cursor={false}
                                className="prose"
                            />
                        </article> : 'Loading...'}
                    </div>
                    <p className="text-center"><Link
                        href="https://drive.google.com/file/d/1bYfVy7tUvBn1pwmRTWMCY1LhcvfYMETi/view?usp=sharing"
                        data-umami-event="Download Resume"
                        className="link">Download Resume</Link></p>
                </label>

            </label>
        </>
    )
}
