import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCode, faWrench } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function NavBar() {

    const nav = [
        {id: 0, label: "Work", href: "/", icon: faCode},
        {id: 1, label: "GitHub", href: "/github", icon: faGithub},
        {id: 2, label: "Tools", href: "/tools", icon: faWrench},
        {id: 3, label: "About", href: "/about", icon: faUser},
    ]

    const [selected, setSelected] = useState(0)
    const router = useRouter()

    const handleClick = (id, href) => {
        setSelected(id)
        router.push(href)
    }

    return (
        <nav>
            <div className="py-6 border-b border-slate-200">
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="font-bold text-4xl">Kevin Smith</h1>
                        <h2 className="mt-2 text-xl">Web Developer, UI/UX Designer</h2>
                    </div>
                    <button class="rounded-full bg-indigo-500 p-1 hover:from-indigo-500 hover:via-sky-500 hover:to-teal-400 hover:bg-gradient-to-r">
                        <Link href="mailto:ksmith4134@gmail.com">
                            <a class="px-8 py-2 block rounded-full bg-white text-indigo-500 hover:text-teal-500 font-bold">Contact</a>
                        </Link>
                    </button>
                </div>

                <div className="flex justify-between items-center mt-20">
                    <div className="flex space-x-6 items-center">
                        {nav.map(page => (
                            <div 
                                key={page.id} 
                                onClick={() => handleClick(page.id, page.href)} 
                                className={`px-8 py-3 ${page.id === selected ? 'bg-gradient-to-r from-slate-700 via-slate-900 to-indigo-900 text-white' : 'text-slate-800 bg-slate-200 hover:bg-slate-300'} rounded-full hover:cursor-pointer flex items-center`}
                            >
                                <span class="inline-flex space-x-4 items-center">
                                    <FontAwesomeIcon icon={page.icon} className={`${page.icon === faGithub ? 'text-3xl' : 'text-xl'}`} />
                                    <span className="text-lg">{page.label}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                    {/* <button class="rounded-full bg-indigo-500 p-1 hover:from-indigo-500 hover:via-sky-500 hover:to-teal-400 hover:bg-gradient-to-r">
                        <Link href="mailto:ksmith4134@gmail.com">
                            <a class="px-8 py-2 block rounded-full bg-white text-indigo-500 hover:text-teal-500 font-bold">Contact</a>
                        </Link>
                    </button> */}
                    
                </div>
                
            </div>
            
        </nav>
    )
}
