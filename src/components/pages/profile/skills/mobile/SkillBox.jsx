/* Context */
    import { useContext} from 'react';
    import LangContext from '../../../../../context/languages';

import ClsBtn from '../../../../global/buttons/ClsBtn';

const SkillBox = ({prof, slogan, skills, skillsImg}) => {

    const { texts  } = useContext(LangContext);

    return(
        <div className="container__skills">
                <div className="skills__prof">
                    <div className="prof__slide"> 
                        <h2 className="prof__title">{prof}</h2>
                    </div>
                    <p dangerouslySetInnerHTML={{__html: slogan}}/>

                    <div className="prof__techs">
                        <h3>{texts.skills.title}:</h3>
                        <ul className={skillsImg.length === 6 ? "animated6Txt" : "animated3Txt"}> 
                            {   
                                // Recorro los skills
                                skills.map((skill, i) =>  
                                    <li key={i}>
                                        {skill}
                                    </li> 
                                )
                            }    
                        </ul>
                    </div>

                    <div className="prof__logos">
                        {
                            // Recorro las imagenes de los skills
                            skillsImg.map((img, i) =>
                                <img key={i} src={img} className="skill__logo"/> 
                            )
                        }
                    </div>

                </div>
        </div>
    )
}

export default SkillBox