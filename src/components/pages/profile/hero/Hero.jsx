/* React */
    import {useEffect} from 'react';

/* Wow animations */
    import WOW from 'wow.js';

/* Components */
    import About from "../about/About"
    import Skills from "../skills/Skills"
    import Experiences from "../experiences/Experiences"
    import Footer from "../footer/Footer"

/* IMG */
    import ship from './img/ship.png';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
    import { faBehance } from '@fortawesome/free-brands-svg-icons'
    import { faGithub } from '@fortawesome/free-brands-svg-icons'

/* Context */
    import { useContext} from 'react';
    import LangContext from '../../../../context/languages';

/* Rutas */
    import { Link } from "react-router-dom";

const Hero = () => {
    
    const { texts  } = useContext(LangContext);

    useEffect(() => {
        const newWOW = () => {new WOW({live: false}).init();}
        newWOW()
    }, []);
 
    return(
        <>
            <section className="section homeSec hero gCenter wow animate__fadeInDown" data-wow-duration="1.5s">   

                <img className="welcome__ship" src={ship} alt="ship" /> 

                <h1 className="welcome__txt">
                    {texts.home.pleasure} Martín Galenda.
                    <div className="txt_changed">
                        <br/> 
                        <strong id="t1">{texts.home.skills.pm}</strong>
                        <strong id="t2">{texts.home.skills.designer}</strong>
                        <strong id="t3">{texts.home.skills.frontDev}</strong>
                    </div>
                    {texts.home.welcome}
                </h1>

                <div className="welcome__socials">
                    <ol className="socials__list">
                        <li>
                            <Link to={ texts.lang ==="es" ? "https://www.linkedin.com/in/martingalenda/?locale=es_ES" : "https://www.linkedin.com/in/martingalenda/" } className="fab fa-linkedin-in" target="_blank">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.behance.net/martingalenda" className="fab fa-behance" target="_blank">
                                <FontAwesomeIcon icon={faBehance} />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://github.com/martingalenda" className="fa-brands fa-github" target="_blank">
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                        </li>
                    </ol>
                </div>

            </section>
            <About/>
            <Skills/>
            <Experiences/>
            <Footer/>
        </>

    )
}

export default Hero