import { useState } from "react"
import { useRouter } from "next/router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCode, faLayerGroup, faWrench, faChevronUp, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'


export default function Nav(props) {

    const { darkModeClick, darkMode } = props

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

    function handleDarkModeClick(){
        darkModeClick(!darkMode)
    }

    const handleNavClick = (id, href) => {
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
            <div className="flex sm:space-x-6 justify-center items-center flex-wrap sm:flex-nowrap">
                <div onClick={() => viewNav(!showNav)} className="mt-8 w-full px-8 py-4 rounded-full bg-gradient-to-r from-slate-800 to-indigo-900 text-white text-center border-2 border-indigo-900 hover:cursor-pointer hover:shadow-lg hover:from-indigo-900 hover:to-indigo-900 order-2 sm:order-1">
                    
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <FontAwesomeIcon icon={nav[selected].icon} className="text-xl" />
                            <div className="text-lg">{nav[selected].label}</div>
                        </div>
                        <FontAwesomeIcon icon={faChevronUp} className={`transition duration-500 delay-100 ${rotation}rotate-180`} />
                    </div>

                </div>

                <button onClick={handleDarkModeClick} className="relative mt-8 w-36 px-12 py-8 rounded-full bg-gradient-to-r from-slate-800 to-indigo-900 text-white text-center shadow-inner shadow-indigo-900 border-2 border-indigo-900 flex items-center order-1 sm:order-2">
                    {darkMode ? 
                        <>
                            <div className="absolute top-1 right-1 bg-slate-900 rounded-full px-5 py-4 flex justify-center items-center">
                                <FontAwesomeIcon icon={faMoon} className="text-white text-2xl" />
                            </div>
                            <FontAwesomeIcon icon={faSun} className="text-indigo-200 hover:text-white hover:opacity-100 text-2xl left-6 absolute opacity-50" />
                        </> :
                        <>
                            <div className="absolute top-1 left-1 bg-white rounded-full p-4 flex justify-center items-center">
                                <FontAwesomeIcon icon={faSun} className="text-indigo-400 text-2xl" />
                            </div>
                            <FontAwesomeIcon icon={faMoon} className="text-indigo-200 text-2xl right-7 absolute opacity-50 hover:text-white hover:opacity-100" />
                        </>
                    }
                </button>
            </div>
            
            { showNav && (
                <div className="flex flex-wrap justify-between items-center gap-4 mt-4">
                    {nav.filter((item) => item.id != selected).map((link) => (
                        <div key={link.id} onClick={() => handleNavClick(link.id, link.href)} className="w-40 flex flex-grow justify-center px-8 py-4 text-center rounded-full text-indigo-900 dark:text-white bg-indigo-100 hover:bg-indigo-200 hover:cursor-pointer dark:bg-indigo-900 hover:dark:bg-indigo-900/80">
                            <div className="flex items-center space-x-4">
                                <FontAwesomeIcon icon={link.icon} className="text-xl" />
                                <div className="text-lg">{link.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </nav>
    )
}
