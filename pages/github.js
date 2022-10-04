import { useState, useEffect } from "react";

export default function Github() {
    
    const [user, setUser] = useState({})
    const [repos, setRepos] = useState([])

    useEffect(() => {

        const getUser = async () => {
            const data = await fetch('https://api.github.com/users/ksmith4134')
            const response = await data.json()
            //console.log(response)
            setUser(response)
        } 
        
        const getRepos = async () => {
            const data = await fetch('https://api.github.com/users/ksmith4134/repos')
            const response = await data.json()
            // console.log(response)
            setRepos(response)
        }

        getUser()
        getRepos()

    }, [])

    return (
        <div>
            <div className="mb-8">
                Username: {user.name}<br />
                Link: {user.html_url}<br />
                Public repos: {user.public_repos}
            </div>
            <div>
                {repos.map((repo, index) => (
                    <div key={index} className="mb-4">
                        {repo.name}<br />
                        {repo.url}<br />
                        {repo.language}
                    </div>
                ))} 
            </div>
        </div>
    ) 
}
