import Link from "next/link";
import {BsGithub, BsLinkedin, BsMedium} from "react-icons/bs";
import {FaNpm} from "react-icons/fa";


export const Footer = () => {
    return (
        <>
            <footer className="footer footer-center p-10 bg-base-100 text-bg-content">
                <div className="flex">
                    Stalk me
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <Link href="https://www.linkedin.com/in/kalibuas/" className="text-lg font-semibold">
                            <BsLinkedin size={30} />
                        </Link>
                        <Link href="https://kalib-stacks.medium.com/" className="text-lg font-semibold">
                            <BsMedium size={30} />
                        </Link>
                        <Link href="https://github.com/kalib-code" className="text-lg font-semibold">
                            <BsGithub size={30} />
                        </Link>
                        <Link href="https://www.npmjs.com/~marculosus" className="text-lg font-semibold">
                            <FaNpm size={30} />
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}