/* Context */
    import { useContext} from 'react';
    import LangContext from '../../context/languages';

/* Img */
    import et1 from './img/et1.png'
    import et2 from './img/et2.png'
    import skillsImg from './skillsImg'
    import {cfSkills} from './skillsImg'

/* Slider */
    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";

/* Components */
    import SkillBox from './box/SkillBox'


const Skills = () => {
    
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
        <section className="section skillsSec">
            <div className="carousel__container">
                    <div className="skills__container">
                        
                        <div className="container__adds">
                            <h2 className="adds__title">{texts.skills.title}</h2>
                            <img className="adds__etDer" src={et1} alt="et" />
                            <img className="adds__etIzq" src={et2} alt="et" />
                        </div>
    
                        <div className="carousel__profs">
                            <Slider {...settings}>
                                {   
                                    // Recorro las profesiones
                                    texts.skills.profs.map((profe, i) => 
                                        <SkillBox
                                            key={i}
                                            prof={profe.prof} 
                                            slogan={profe.slogan} 
                                            skills={profe.skills}
                                            skillsImg={skillsImg[i]}
                                            currentFocus={cfSkills[i]}
                                         /> 
                                    )
                                }       
                            </Slider>  
                        </div>

                    </div>
                </div>
        </section>
    )
}

export default Skills