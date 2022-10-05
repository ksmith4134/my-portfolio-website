import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from 'next/future/image'
import me from '../../public/me.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCode, faLayerGroup, faWrench, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

export default function NavBar() {

    const nav = [
        {id: 0, label: "Portfolio", href: "/", icon: faCode},
        {id: 1, label: "GitHub", href: "/github", icon: faGithubAlt},
        {id: 2, label: "Stack", href: "/stack", icon: faLayerGroup},
        {id: 3, label: "Tools", href: "/tools", icon: faWrench},
        {id: 4, label: "About", href: "/about", icon: faUser},
    ]

    const [selected, setSelected] = useState(0)
    const [showNav, setShowNav] = useState(false)
    const [rotation, setRotation] = useState("")
    const router = useRouter()

    const handleClick = (id, href) => {
        router.push(href)
        setSelected(id)
        setRotation("")
        setShowNav(false)
    }

    const viewNav = (bool) => {
        setShowNav(bool)
        bool === true ? setRotation("-") : setRotation("")
    }

    return (
        <nav>
            <div className="pt-6">
                
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <Link href="/">
                            <a>
                                <Image src={me} className="rounded-full w-32 h-32 shadow-lg shadow-gray-300" alt="profile picture" priority="true" />
                            </a>
                        </Link>
                        <div>
                            <h1 className="font-bold text-4xl">Kevin Smith</h1>
                            <h2 className="mt-2 text-xl md:text-2xl">Web Developer, UI/UX Designer</h2>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <div onClick={() => viewNav(!showNav)} className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-slate-700 via-slate-900 to-indigo-900 text-white text-center hover:cursor-pointer hover:shadow-lg hover:from-slate-900 hover:to-indigo-900">
                        
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <FontAwesomeIcon icon={nav[selected].icon} className="text-xl" />
                                <div className="text-lg">{nav[selected].label}</div>
                            </div>
                            <FontAwesomeIcon icon={faChevronUp} className={`transition duration-500 delay-100 ${rotation}rotate-180`} />
                        </div>

                        </div> 
                        { showNav && (
                            <div className="flex flex-wrap justify-between items-center gap-4 mt-4 mb-8">
                                {nav.filter((item) => item.id != selected).map((link) => (
                                    <div key={link.id} onClick={() => handleClick(link.id, link.href)} className="w-40 flex flex-grow justify-center px-8 py-4 text-center rounded-full text-slate-800 bg-slate-200 hover:bg-slate-300 hover:cursor-pointer">
                                        <div className="flex items-center space-x-4">
                                            <FontAwesomeIcon icon={link.icon} className="text-xl" />
                                            <div className="text-lg">{link.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                </div>
                
            </div>
            
        </nav>
    )
}
