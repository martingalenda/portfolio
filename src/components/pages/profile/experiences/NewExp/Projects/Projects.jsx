
/* Context */
    import { useContext, useEffect, useRef } from 'react'
    import LangContext from '../../../../../../context/languages'

/* Project */
    import Project from './project/Project'

const Projects = ({ proyectoID }) => { 

    const { texts  } = useContext(LangContext)

    const projectsRef = useRef(null)

    useEffect(() => {
        const projectsNode = projectsRef.current

        const project = projectsNode.querySelectorAll('ul > div')[proyectoID]
    
        if (project) {    
            project.scrollIntoView({
                behavior: "smooth"
            })
        }
    }, [proyectoID])

    return(
        <div className="projects__container wow animate__fadeInDown" data-wow-duration="1s" ref={projectsRef}>
            {   
                texts.experiences.experience.map((project, i) => 
                    <ul key={i}>
                        <Project
                            name={project.project}
                            industry={project.industry}
                            rol={project.rol}
                            dates={project.dates}
                            url={project.url}
                            description={project.description}
                            classID = {project.classID}
                        /> 
                    </ul>
                )
            }       
        </div>
    )
}

export default Projects




