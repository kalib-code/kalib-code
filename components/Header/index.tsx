import Link from "next/link";


export const Header = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost normal-case text-xl">
                        <span className="text-orange-500">.</span>Alibuas
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link data-umami-event="Click Medium" href="https://kalib-stacks.medium.com/" className="text-lg font-semibold">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}