import {BsFillSendFill} from "react-icons/bs";

import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";
// import {BsGithub, BsLinkedin, BsMedium} from "react-icons/bs";
// import {FaNpm} from "react-icons/fa";

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

    const {message, isOpen, isFetching, setMessage, onClick, chat, onClickModal} = props;

    const onChangeToggle = (e: any) => {
        onClickModal()
    }



    // get all the link in a string and put in a array
    // const getLink = (str: string) => {
    //     const regex = /https?:\/\/[^\s]+/g;
    //     return str?.match(regex);
    // }

    // const showLink = (str: string) => {
    //     switch (str) {
    //         case 'https://www.linkedin.com/in/kalibuas/':
    //             return <Link className={"badge badge-lg mr-4"} href={str}><BsLinkedin size={30}/></Link>
    //         case 'https://medium.com/@kalib-stacks':
    //             return <Link className={"badge badge-lg mr-4"} href={str}><BsMedium size={30}/></Link>
    //         case 'https://www.npmjs.com/~marculosus':
    //             return<Link className={"badge badge-lg mr-4"} href={str}> <FaNpm size={30}/></Link>
    //         case 'https://github.com/kalib-code':
    //             return<Link className={"badge badge-lg mr-4"} href={str}> <BsGithub size={30}/></Link>
    //
    //     }
    // }
    // // @ts-ignore
    // const linksRender=  getLink(chat as string)?.map((link: string, index) => {
    //     return (
    //         <div key={index}>
    //             {showLink(link)}
    //         </div>
    //     )
    // })

    return (
        <>
            <input onChange={onChangeToggle} defaultChecked={isOpen} type="checkbox" id="my-modal-4"
                   className="modal-toggle"/>
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative p-5" htmlFor="">
                    <div className="form-control mb-20">
                        <div className="input-group mb-5">
                            <input type="text" placeholder="Ask me about Karl" className="input input-bordered w-full"
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
                                <BsFillSendFill/>
                            </button>
                        </div>
                        {!isFetching ? <article className="prose-base">
                            <TypeAnimation
                               sequence={

                                [ chat as string , 1000,()=>{console.log('done')}]}
                               wrapper={"p"}
                               cursor={false}
                               className="prose"
                            />
                        </article> : 'Loading...'}
                    </div>
                    {/*<div className="w-full justify-center content-center">*/}
                    {/*    /!* @ts-ignore center  *!/*/}
                    {/*    {getLink(chat as string) ?<div className="flex flex-row">*/}
                    {/*        {linksRender}*/}
                    {/*    </div>: null*/}
                    {/*    }*/}

                    {/*</div>*/}
                    <p className="text-center"><Link
                        href="https://drive.google.com/file/d/1nwKypNkc8mRadrACedHsC_JqLJiyRa4T/view?usp=sharing"
                        className="link">Download Resume</Link></p>
                </label>

            </label>
        </>
    )
}
