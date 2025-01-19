import Link from "next/link"

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center">
            
            {/* show links if sidebar is hidden because we are on mobile */}
            <div className="sm:hidden flex">

                <Link href="https://www.linkedin.com/in/andersontseng/" className="p-2 text-gray-500 dark:hover:text-gray-200 hover:text-gray-900">Linkedin</Link>
                
                <Link href="https://www.instagram.com/anderson_wootdidoo/" className="p-2 text-gray-500 dark:hover:text-gray-200 hover:text-gray-900">Instagram</Link>

                <Link href="https://github.com/highfire1" className="p-2 text-gray-500 dark:hover:text-gray-200 hover:text-gray-900">Github</Link>
                
                <Link href="https://devpost.com/Highfire1" className="p-2 text-gray-500 dark:hover:text-gray-200 hover:text-gray-900">Devpost</Link>
            </div>

            <p>(c) 2022-2025 Anderson Tseng.</p>
        </footer>
    )
}

export default Footer