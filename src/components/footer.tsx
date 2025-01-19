import Link from "next/link"

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center">
            
            {/* show links if sidebar is hidden because we are on mobile */}
            <div className="flex gap-2 sm:hidden">

                <Link href="https://www.linkedin.com/in/andersontseng/" className="text-gray-500 hover:text-gray-900">Linkedin</Link>
                
                <Link href="https://www.instagram.com/anderson_wootdidoo/" className="text-gray-500 hover:text-gray-900">Instagram</Link>

                <Link href="https://github.com/highfire1" className="text-gray-500 hover:text-gray-900">Github</Link>
                
                <Link href="https://devpost.com/Highfire1" className="text-gray-500 hover:text-gray-900">Devpost</Link>
            </div>

            <p>(c) 2022-2025 Anderson Tseng.</p>
        </footer>
    )
}

export default Footer