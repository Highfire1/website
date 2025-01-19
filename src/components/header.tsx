import Link from 'next/link'

const Header = () => {
    return (
        <header className=" ">
            <nav className="w-full mx-auto flex items-center justify-between ">
            
            <div className="justify-start">
                <Link href="/" className="text-xl font-bold text-gray-500">
                <span className="min-[300px]:hidden">AT</span>
                <span className="hidden min-[300px]:inline">Anderson Tseng</span>
                </Link>
            </div>

            <div className="flex sm:gap-4 justify-end grow max-[99px]:w-full">
                <Link href="/about" className="p-2 text-gray-500 dark:hover:text-gray-200 hover:text-gray-900">
                About
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