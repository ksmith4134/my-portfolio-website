import { useEffect, useState } from "react"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faArrowRight, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function ProjectDrawer(props) {

    const {closeDrawer, project} = props
    // entity, logo, title, type, skills, website, wireframe, summary, tech

    useEffect(()=>{
        document.body.style.overflow = 'hidden'

        return function cleanup(){
            document.body.style.overflow = 'unset'
        }
    },[])

    return (
        <div className="bg-gray-900 bg-opacity-90 fixed top-0 left-0 w-screen h-screen z-50 text-black">
            <div className="absolute right-0 top-0 w-full max-w-screen-md bg-white dark:bg-neutral-900 dark:text-slate-50 h-full overflow-y-scroll">
                <div className="px-12">
                    <header className="pt-8 pb-4">
                        <button onClick={() => closeDrawer()} className="absolute top-0 right-0 m-8 text-2xl cursor-pointer">
                            <FontAwesomeIcon icon={faTimes} className="" />
                        </button>
                        {project.logo && (
                            <div className="block">
                                <Image src={project.logo} alt="project entity logo" width={72} height={72} layout="fixed" />
                            </div>
                        )}
                        <h2 className="mt-4 text-3xl font-bold">{project.entity}</h2>
                        <h3 className="mt-2 text-lg">{project.title}</h3>

                        {/* {project.type && (
                            <div className="mt-4 text-xs rounded-full bg-slate-600 text-white px-4 py-2 w-fit">
                                {project.type}
                            </div>
                        )} */}

                        <div className="flex flex-wrap space-x-4 items-center mt-4">
                            {project.skills?.map((skill, index) => (
                                <div key={index} className="text-xs px-4 py-2 bg-slate-300 dark:bg-slate-600 rounded-full">
                                    {skill.label}
                                </div>
                            ))}
                        </div>

                        <p className="mt-16 text-xl font-bold">App Summary</p>
                        <p className="mt-4 text-sm">{project.summary}</p>

                        <div className="flex flex-wrap gap-4 mt-4 text-sm">
                            { project.website && (
                                <div className="w-32">
                                    <a href={project.website} target="_blank" rel="noreferrer" className="text-sky-500 hover:font-bold">
                                        <div className="flex space-x-2 items-center">
                                            <p>Visit website</p>
                                            <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                                        </div>
                                    </a>
                                </div>
                            )}
                            { project.wireframe && (
                                <div className="w-44">
                                    <a href={project.wireframe} target="_blank" rel="noreferrer" className="text-sky-500 hover:font-bold">
                                        <div className="flex space-x-2 items-center">
                                            <p>Design Wireframes</p>
                                            <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                                        </div>
                                    </a>
                                </div>
                            )}
                        </div>

                        { project.note && (
                            <div className="mt-6 text-xs italic max-w-sm text-red-200">
                                * {project.note}
                            </div>
                        )}

                        <p className="mt-12 text-xl font-bold">Tech Stack</p>
                        <div className="flex items-center space-x-6 mt-4">
                            {project.tech?.map((e, index) => (
                                <span key={index} className="">
                                    <Image src={e.logoSm} alt="tech logo" width={35} height={30} layout="fixed" />
                                </span>
                            ))}
                        </div>
                        
                        { project.contributions && (
                            <>
                                <p className="mt-12 text-xl font-bold">Major Contributions</p>
                                <ul>
                                    { project.contributions.map((contribution) => (
                                        <li key={contribution.id} className="mt-4 flex justify-start items-start gap-2">
                                            <FontAwesomeIcon icon={faAngleRight} className="text-sm mt-1" />
                                            <div className="text-sm">{contribution.description}</div>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                        

                    </header>
                </div>
            </div>
        </div>
    )
}
