import Head from "next/head";
import Card from "../components/widgets/Card";
import { myProjects } from "../data/data";

export default function Home(props) {

    const { projectList } = props

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

            <main>
                <div className="grid grid-cols-1 gap-10 mt-4">
                    {projectList.map(project => (
                        <Card key={project.id} entity={project.entity} title={project.title} type={project.type} skills={project.skills} website={project.website} wireframe={project.wireframe} summary={project.summary} released={project.used} tech={project.tech} logo={project.logo} />
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
            description: project.longDescription,
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
