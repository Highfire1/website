import Link from 'next/link'

const Header = () => {
    return (
        <header className=" ">
            <nav className="w-full mx-auto flex items-center justify-between ">
                
                <div className="hidden min-[100px]:block justify-start">
                    <Link href="/" className="text-xl font-bold text-gray-500">
                        Anderson Tseng
                    </Link>
                </div>

                <div className="flex sm:gap-4 justify-end grow max-[99px]:w-full">
                    <Link href="/" className="p-2 text-gray-500 dark:hover:text-gray-200 hover:text-gray-900">
                        Home
                    </Link>
                    <Link href="/blog" className="p-2 text-gray-500 dark:hover:text-gray-200 hover:text-gray-900">
                        Blog
                    </Link>
                    {/* <Link href="/contact" className="text-gray-500 hover:text-gray-900">
                        Contact
                    </Link> */}
                </div>
            </nav>
        </header>
    )
}

export default Header