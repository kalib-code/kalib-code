import {BsFillSendFill} from "react-icons/bs";
import Typical from "react-typical";
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

    const {message, isOpen, isFetching, setMessage, onClick, chat, onClickModal} = props;

    const onChangeToggle = (e: any) => {
        onClickModal()
    }

    // @ts-ignore

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
                        {!isFetching ? <Typical
                            steps={[chat as string, 1000]}
                        /> : 'Loading...'}
                    </div>
                    <p className="text-center"><Link
                        href="https://drive.google.com/file/d/14rK9PVq1py4-fnIyTsZ3dTZ_kXufESxf/view?usp=sharing"
                        className="link">Download Resume</Link></p>
                </label>

            </label>
        </>
    )
}