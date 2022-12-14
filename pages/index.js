import Head from "next/head";
import Card2 from "../components/widgets/Card2";
import { useState } from "react";
import ProjectDrawer from "../components/drawers/ProjectDrawer";
import { myProjects } from "../data/data";

export default function Home(props) {

    const { projectList } = props

    const [project, setProject] = useState(null)

    const openDrawer = (id) => {

        let project = projectList.find((project)=>{
            return (project.id === id)
        })
        
        setProject(project)
    }

    const closeDrawer = () => {
        setProject(null)
    }


    return (
        <div>
            <Head>
                <title>KS Portfolio</title>
                <meta
                    name="description"
                    content="web development and ui/ux design portfolio"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="relative">
                { project && (
                    <ProjectDrawer closeDrawer={closeDrawer} project={project} />
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4">
                    {projectList.map(project => (
                        <Card2 key={project.id} id={project.id} entity={project.entity} title={project.title} summary={project.summary} logo={project.logo} tech={project.tech} showProject={openDrawer} />
                    ))}
                </div>
            </main>
        </div>
    )
}


export async function getStaticProps () {

    let projectList = myProjects.map(project => {
        return {
            id: project.id,
            entity: project.entity, 
            logo: project.entityLogo, 
            title: project.projectTitle, 
            type: project.type,
            skills: project.skills,
            website: project.website,
            wireframe:project.wireframeLink,
            designLink: project.wireframeLink,
            summary: project.shortDescription,
            note: project.specialNote,
            contributions: project.contributions,
            released: project.releaseDate,
            tech: project.techUsed
        }

    })

  return {
    props: {
        projectList
    }
  }
}