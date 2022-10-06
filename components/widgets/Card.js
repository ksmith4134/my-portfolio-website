import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {

    const { 
        entity, logo, title, type, skills, website, wireframe, summary, tech 
    } = props

  return (
    <div className="bg-white border-[1px] border-slate-200 rounded-lg px-6 pb-6 pt-2 hover:shadow-xl hover:shadow-slate-400/10">

        <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center sm:space-x-4 mt-4">
                {logo && (
                    <span className="hidden sm:block">
                        <Image src={logo} alt="project entity logo" width={50} height={50} layout="fixed" />
                    </span>
                )}
                <div>
                    <p className="text-lg font-semibold">{entity}</p>
                    <div>{title}</div>
                </div>
            </div>
            {type && (
                <div className="mt-4 text-xs rounded-full bg-slate-600 text-white px-4 py-2">
                    {type}
                </div>
            )}
        </div>
        
        { summary && (
            <div className="mt-6 text-base">{summary}</div>
        )}

        <div className="flex flex-wrap gap-4 mt-4 text-xs">
            { website && (
                <div className="w-24">
                    <a href={website} target="_blank" rel="noreferrer" className="text-sky-500 hover:font-bold">
                        <div className="flex space-x-2 items-center">
                            <p>Visit website</p>
                            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                        </div>
                    </a>
                </div>
            )}
            { wireframe && (
                <div className="w-36">
                    <a href={wireframe} target="_blank" rel="noreferrer" className="text-sky-500 hover:font-bold">
                        <div className="flex space-x-2 items-center">
                            <p>Design Wireframes</p>
                            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                        </div>
                    </a>
                </div>
            )}
        </div>
        

        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center mt-4">

            <div className="flex flex-wrap text-center items-center gap-2 mt-4">
                {skills?.map((skill, index) => (
                    <div key={index} className="text-xs px-4 py-2 bg-slate-300 rounded-full">
                        {skill.label}
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-2 mt-4">
                {tech?.slice(0, 4).map((e, index) => (
                    <span key={index} className="">
                        <Image src={e.logoSm} alt="tech logo" width={35} height={30} layout="fixed" />
                    </span>
                ))}
            </div>

        </div>
    </div>
  )
}
