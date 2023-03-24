import Link from "next/link";


export const Header = () => {
    return (
        <>
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
        </>
    )
}