import Image from "next/image"

export default function Card(props) {

    const { 
        entity,
        logo,
        title,
        type,
        skills,
        summary,
        tech 
    } = props

  return (
    <div className="bg-slate-100 border-[1px] border-slate-200 rounded-lg p-6 hover:shadow-xl hover:cursor-pointer">
        <div className="flex items-center space-x-4">
            {logo && (
                <Image src={logo} alt="project entity logo" width={60} height={60} layout="fixed" />
            )}
            <div>
                <p className="text-lg font-semibold">{entity}</p>
                <div>{title}, {type}</div>
            </div>
            {/* <div className="rounded-full bg-slate-800 text-white px-4 py-1">{type}</div> */}
        </div>
        
        <div className="mt-6 text-sm h-16 overflow-y-hidden">{summary}</div>
        <div className="flex justify-between items-center mt-8">
            <div className="flex space-x-2">
                {skills.map((skill, index) => (
                    <div key={index} className="text-xs px-4 py-2 bg-slate-600 text-white rounded-full">
                        {skill.label}
                    </div>
                ))}
            </div>

            
            
            <div className="flex items-center space-x-1">
                {tech.slice(0, 4).map((e, index) => (
                    <span key={index} className="">
                        <Image src={e.logoSm} alt="tech logo" width={40} height={30} layout="fixed" />
                    </span>
                ))}
            </div>

        </div>
    </div>
  )
}
