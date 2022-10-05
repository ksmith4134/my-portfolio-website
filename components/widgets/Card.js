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
    <div className="bg-white border-[1px] border-slate-200 rounded-lg p-6 hover:shadow-xl hover:shadow-slate-400/10 hover:cursor-pointer">
        <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
                {logo && (
                    <Image src={logo} alt="project entity logo" width={50} height={50} layout="fixed" />
                )}
                <div>
                    <p className="text-lg font-semibold">{entity}</p>
                    <div>{title}</div>
                </div>
            </div>
            {type && (
                <div className="text-xs rounded-full bg-slate-600 text-white px-4 py-2">
                    {type}
                </div>
            )}
        </div>
        
        { summary && (
            <div className="mt-6 text-base">{summary}</div>
        )}

        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center mt-8">

            <div className="flex space-x-2">
                {skills?.map((skill, index) => (
                    <div key={index} className="text-xs px-4 py-2 bg-slate-300 rounded-full">
                        {skill.label}
                    </div>
                ))}
            </div>

            <div className="flex items-center space-x-2">
                {tech?.slice(0, 3).map((e, index) => (
                    <span key={index} className="">
                        <Image src={e.logoSm} alt="tech logo" width={35} height={30} layout="fixed" />
                    </span>
                ))}
            </div>

        </div>
    </div>
  )
}
