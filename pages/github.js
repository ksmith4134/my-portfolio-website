import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Github() {
    
    const [user, setUser] = useState({})
    const [joinDate, setJoinDate] = useState("")
    const [repos, setRepos] = useState([])

    useEffect(() => {

        const getUser = async () => {
            const data = await fetch('https://api.github.com/users/ksmith4134')
            const response = await data.json()
            // console.log(response)
            setUser(response)

            const date = new Date(response.created_at)
            const formatDate = date.toLocaleDateString()
            setJoinDate(formatDate)
        } 
        
        const getRepos = async () => {
            const data = await fetch('https://api.github.com/users/ksmith4134/repos')
            const response = await data.json()
            console.log(response)
            setRepos(response)
        }

        getUser()
        getRepos()

    }, [])

    return (
        <div>
            <div className="px-8">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="mt-8 pr-8 inline-flex items-center">
                        <FontAwesomeIcon icon={faGithub} className="text-slate-800 text-5xl sm:text-6xl pr-4" />
                        <div>
                            <h1 className="font-semibold text-xl">{user.name}</h1>
                            <div className="">{joinDate}</div>
                        </div>
                    </div>
                    <div className="inline-flex items-center space-x-4 mt-8">

                        <div className="relative rounded-full w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-300 via-sky-400 to-indigo-500">
                            <span className="absolute w-10 h-10 sm:w-16 sm:h-16 bottom-1 left-1 sm:bottom-2 sm:left-2 flex justify-center items-center rounded-full bg-white text-sky-500 text-2xl sm:text-4xl">{repos.length}</span>
                        </div>
                        <div>
                            <h1 className="font-semibold text-xl">Public Repos</h1>
                            <a href={user.html_url} target="_blank" rel="noreferrer" className="text-sky-500 hover:underline hover:underline-offset-4">See my code</a>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="grid grid-cols-1 gap-8 mt-12">
                {repos.map((repo, index) => (
                    <div key={index} className="bg-white border-[1px] border-slate-200 rounded-lg p-6 hover:shadow-xl hover:shadow-slate-400/10 hover:cursor-pointer">
                        <p className="font-semibold">{repo.name}</p>
                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-sky-500 text-sm hover:underline hover:underline-offset-4">{repo.html_url}</a>
                        <div className="mt-4 text-base">{repo.description}</div>
                        <div className="w-fit mt-6 text-xs rounded-full bg-indigo-900 text-white px-4 py-2">
                            {repo.language}
                        </div>
                    </div>
                ))} 
            </div>
        </div>
    ) 
}
