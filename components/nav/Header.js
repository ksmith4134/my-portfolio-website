import Link from "next/link"
import Image from 'next/future/image'
import me from '../../public/me.png'

export default function Header() {

    return (
        <div className="pb-6"> 
            <div className="sm:flex sm:items-center space-x-4"> 
                <Link href="/">
                    <a>
                        <Image src={me} className="mx-auto rounded-full w-24 h-24 shadow-lg shadow-gray-300 dark:shadow-none" alt="profile picture" priority="true" />
                    </a>
                </Link>
                <div className="mt-8 sm:mt-0 text-center sm:text-left">
                    <h1 className="font-bold text-4xl">Kevin Smith</h1>
                    <h2 className="mt-2 text-xl sm:text-xl">Web Developer, UI/UX Designer</h2>
                </div>
            </div>
        </div>
    )
}
