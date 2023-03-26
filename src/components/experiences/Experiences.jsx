/* Context */
    import { useContext } from 'react';
    import LangContext from '../../context/languages';

/* Img */
    import ball from './img/ball.png';
    import planet from './img/planet.png';

/* Modal */
    import {useModals} from "../../hooks/useModals"
    import Modal from "../modals/Modal"
    import Projects from "./projects/Projects"
 

const Experiences = () => {
    
    const { texts  } = useContext(LangContext);

    const [isActiveProject, openProject, closeProject] = useModals()
  
    return(
        <>
            <section className="section experiencesSec">
                <div className="m-top">
                    <h2>{texts.experiences.title}</h2>
                    <img className="planet" src={planet} alt="Planet" />
        
                    <div className="experiences__lineTime">
                        <div className="lineTime__active">
                            <ul>
                                {
                                   texts.experiences.experience.map((project, i) => 
                                       <li key={i}>
                                           <div 
                                               className={`lineTime__box lineTime__box-${project.classID} experience`}
                                               onClick={() => openProject()}
                                           >
                                               <img className="box__al" src={ball} alt="ball" />
                                               <div>
                                                   <h3><strong>{project.project}</strong></h3>
                                                   <p>{project.industry}</p>
                                               </div>
                                           </div>
                                       </li>
                                   )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Modal active={isActiveProject} close={closeProject}>
                <Projects close={closeProject}/>
            </Modal>
        </>
    )
} 

export default Experiences







// <li>
// <div 
//     className="lineTime__box lineTime__box-bloyd experience"
//     onClick={() => openProject()}
// >
//     <img className="box__al" src={ball} alt="ball" />
//     <div>
//         <h3><strong>{texts.experiences.experience[0].project}</strong></h3>
//         <p>{texts.experiences.experience[0].industry}</p>
//     </div>
// </div>
// </li>
// 
// <li>
// <div 
//     className="lineTime__box lineTime__box-newline experience"
//     onClick={() => openProject()}
//     >
//     <img className="box__ar" src={ball} alt="ball" />
//     <div>
//         <h3><strong>{texts.experiences.experience[1].project}</strong></h3>
//         <p>{texts.experiences.experience[1].industry}</p>
//     </div>
// </div>
// </li>
// 
// <li>
// <div 
//     className="lineTime__box lineTime__box-kucoin experience"
//     onClick={() => openProject()}
//     >
//     <img style={{right: '12.4em'}} className="box__al" src={ball} alt="ball" />
//     <div>
//         <h3><strong>{texts.experiences.experience[2].project}</strong></h3>
//         <p>{texts.experiences.experience[2].industry}</p>
//     </div>
// </div>
// </li>