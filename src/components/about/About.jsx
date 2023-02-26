/* Context */
    import { useContext} from 'react';
    import LangContext from '../../context/languages';

/* Img */
    import eye from './img/eye.png'
    import ship from './img/ship.png'
    import poligon from './img/poligon.png'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faPaintBrush } from '@fortawesome/free-solid-svg-icons'
    import { faDiagramProject } from '@fortawesome/free-solid-svg-icons'
    import { faCode } from '@fortawesome/free-solid-svg-icons'

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
                            <a href={texts.lang === "es" ? "/public/cv/cvMGES.pdf" : "/public/cv/cvMGEN.pdf" } target="_blank" >
                                <img className="small-eye" src={eye} alt="view"/> 
                                {texts.about.viewCV}
                            </a>
                        </div>
                    </div>
                    <div className="description__info">
                        <div className="description__text">
                            <p>" {texts.about.intro} "</p>
                        </div>
                        <div className="description__stats">
                            <div className="stats__contain">
                                <img src={poligon} alt="stats"/>
                                <FontAwesomeIcon icon={faPaintBrush} className="faIcons fa-paint-brush" />
                                <FontAwesomeIcon icon={faDiagramProject} className="faIcons fa-project-diagram"/>
                                <FontAwesomeIcon icon={faCode} className="faIcons fa-code"/>
                                <div className="stats__poligon"/>
                            </div>
                        </div>
                    </div>

            </div>
        </section>
    )
}

export default About