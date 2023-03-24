import Link from "next/link";
import {BsGithub, BsLinkedin, BsMedium} from "react-icons/bs";
import {FaNpm} from "react-icons/fa";


export const Footer = () => {
    return (
        <>
            <footer className="flex flex-col items-center justify-center w-full h-24 mb-10">
                <p className="text-lg font-normal mb-5">
                    Stalk me<span className="text-orange-500">.</span>
                </p>
                <div className="flex space-x-4">
                    <Link href="https://www.linkedin.com/in/kalibuas/" className="text-lg font-semibold">
                        <BsLinkedin size={50} />
                    </Link>
                    <Link href="https://kalib-stacks.medium.com/" className="text-lg font-semibold">
                        <BsMedium size={50} />
                    </Link>
                    <Link href="https://github.com/kalib-code" className="text-lg font-semibold">
                        <BsGithub size={50} />
                    </Link>
                    <Link href="https://www.npmjs.com/~marculosus" className="text-lg font-semibold">
                        <FaNpm size={50} />
                    </Link>
                </div>

            </footer>
        </>
    )
}