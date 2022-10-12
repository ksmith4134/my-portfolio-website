import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Card2(props) {

    const { 
        id, entity, logo, title, summary, showProject 
    } = props

  return (
    <div onClick={() => showProject(id)} className="mt-4 rounded-xl p-6 hover:shadow-xl dark:hover:bg-neutral-800 hover:bg-slate-100 hover:shadow-slate-400/10 dark:shadow-none hover:cursor-pointer">

                <div className="flex justify-center items-center rounded-full p-4 w-20 h-20 bg-gray-100 dark:bg-neutral-800 border-[1px] border-neutral-200 dark:border-neutral-700">
                    {logo && (
                        <div className="block w-12 h-12">
                            <Image src={logo} alt="project entity logo" width={48} height={48} layout="fixed" />
                        </div>
                    )}
                </div>
                <div>
                    <p className="mt-4 text-lg font-semibold">{entity}</p>
                    <div>{title}</div>
                    { summary && (
                        <div className="mt-6 text-sm dark:text-neutral-400">{summary}</div>
                    )}
                </div>

                <div className="mt-8 mb-2 flex items-center space-x-4 text-sky-500">
                    <p className="text-sm">Learn More</p>
                    <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
                </div>
        
    </div>
  )
}
