/* Context */
    import { useContext} from 'react';
    import LangContext from '../../../../context/languages';

/* Rutas */
    import { Link } from "react-router-dom";

/* Img */
    import eye from './img/eye.png'
    import ship from './img/ship.png'

const About = () => {
    
    const { texts  } = useContext(LangContext);
 
    return(
        <section className="section aboutSec gCenter">
            <div className="aboutme__container">

                    <div className="container__title">
                        <h2 className="title__txt">{texts.about.title}</h2>
                        <img className="media__nav" src={ship} alt="ship"/>
                    </div>
                    <div className="container__about">
                        <div className="">
                            <p>
                                <strong> Martín Galenda <br/> {texts.about.born} </strong>
                            </p>
                        </div>
                        <div className="about__cv">
                            <Link to={texts.lang === "es" ? "/portfolio/cv/cvMGES.pdf" : "/portfolio/cv/cvMGEN.pdf" } target="_blank" >
                                <img className="small-eye" src={eye} alt="view"/> 
                                {texts.about.viewCV}
                            </Link>
                        </div>
                    </div>
                    <div className="description__info">
                        <p>" {texts.about.intro} "</p>
                        <p style={{margin: 'auto', backgroundColor: '#1b233c8a', padding: '0.5em 2em'}}>{texts.about.eslogan}</p>
                    </div>

            </div>
        </section>
    )
}

export default About