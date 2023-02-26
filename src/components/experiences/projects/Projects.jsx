
/* Context */
    import { useContext } from 'react';
    import LangContext from '../../../context/languages';

/* Slider */
    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";

/* Project */
    import Project from './project/Project'

const Projects = () => { 

    const { texts  } = useContext(LangContext);

    // Slider conf
        const settings = {
            dot: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            cssEase: "linear"
        } 

    
    return(
        <div>
        
            <div className="projects">
                <div className="list__projects">
                    <Slider {...settings}>
                        {   
                            // Recorro las profesiones
                            texts.experiences.experience.map((project, i) => 
                                <Project
                                    key={i}
                                    name={project.project}
                                    industry={project.industry}
                                    rol={project.rol}
                                    more={project.more}
                                    url={project.url}
                                    description={project.description}
                                    classID = {project.classID}
                                /> 
                            )
                        }       
                    </Slider>  
                </div>
            </div>
        </div>
    )
}

export default Projects




