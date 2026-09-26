import Link from 'next/link'
import { ChangeThemeButton } from './theme-button'

const Header = () => {
    return (
        <header className="w-full">

            <nav className="w-full mx-auto grid grid-cols-[1fr_auto] items-center text-xl">

                <div className="@container justify-start col-start-1 w-full  align-middle">
                    {/* Container queries are so freaking cool */}
                    <Link href="/" className="block py-2 p w-fit font-bold dark:hover:text-gray-400 hover:text-gray-900">
                        <span className="block @min-[8ch]:hidden w-fit">AT</span>
                        <span className="hidden @min-[8ch]:block @min-[10ch]:hidden w-fit">Anderson</span>
                        <span className="hidden @min-[10ch]:block @min-[13ch]:hidden w-fit">Anderson T</span>
                        <span className="hidden @min-[13ch]:block w-fit">Anderson Tseng</span>
                    </Link>
                </div>

                <div className="justify-self-end gap-2 sm:gap-4 flex justify-end items-center font-bold align-middle">
                    <Link href="/about" className="py-2 dark:hover:text-gray-400 hover:text-gray-900" prefetch={true}>
                        About
                    </Link>
                    {/* <Link href="/gallery" className="py-2dark:hover:text-gray-200 hover:text-gray-900">
                        Gallery
                    </Link> */}
                    <Link href="/blog" className="py-2 dark:hover:text-gray-400 hover:text-gray-900" prefetch={true}>
                        Blog
                    </Link>
                    <ChangeThemeButton />
                </div>

            </nav>
        </header>
    )
}

export default Header