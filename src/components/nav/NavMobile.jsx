/* React */
    import {useEffect} from 'react';
/* Rutas */
    import { Link } from "react-router-dom";
/* Wow animations */
    import WOW from 'wow.js';
/* Imgs*/
    import logo from './img/logo.png'
    import en from './img/en.png'
    import es from './img/es.png'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
    import { faBurger } from '@fortawesome/free-solid-svg-icons'
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
    import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
/* Context */
    import {useContext} from 'react';
    import LangContext from '../../context/languages';
/* Modal */
    import {useModals} from "../../hooks/useModals"
    import Modal from "../modals/Modal"


const NavMobile = () => {
    
    const { texts, handleLanguageEN, handleLanguageES  } = useContext(LangContext);
    const [isActiveNavMobile, openNavMobile, closeNavMobile] = useModals()

    useEffect(() => {
        const newWOW = () => {new WOW({live: false}).init();}
        newWOW()
    }, []);

    return(
        <nav className="header__mobile wow animate__fadeInDownBig">

        
            <Modal active={isActiveNavMobile} close={closeNavMobile}>
                <div className="mobile__options">
                    <div className="container__close"></div>
                    <ol className="options__list">
                        <Link className="fa-solid fa-xmark xClose"></Link>
                        <li data-menuanchor="home"> 
                            <a onClick={closeNavMobile} href="#homeSec">
                                <img src={logo} className="nav__logo" alt="logo"/>
                            </a> 
                        </li>
                        <li data-menuanchor="aboutme"> 
                            <a onClick={closeNavMobile} href="#aboutSec" className="cMM"> {texts.nav.about} </a> 
                        </li>
                        <li data-menuanchor="skills"> 
                            <a onClick={closeNavMobile} href="#skillsSec" className="cMM">{texts.nav.skills}</a> 
                        </li>
                        <li data-menuanchor="projects"> 
                            <a onClick={closeNavMobile} href="#projectsSec" className="cMM">{texts.nav.projects}</a> 
                        </li>
                    </ol>
                    <div className="welcome__socials ws-position">
                        <h2 className="contact__socials">{texts.nav.contact}:</h2>
                        <ol className="socials__list">
                            <li>
                                <Link  target="_blank" to="mailto:martinarielgalenda@gmail.com">
                                    <FontAwesomeIcon icon={faEnvelope} className="far fa-envelope"/>
                                </Link>
                            </li>
                            <li>
                                <Link target="_blank" to="https://t.me/martingalenda">
                                    <FontAwesomeIcon icon={faPaperPlane} className="fa-solid fa-paper-plane"/>
                                </Link>
                            </li>
                            <li>
                                <Link target="_blank" to={ texts.lang ==="es" ? "https://www.linkedin.com/in/martingalenda/?locale=es_ES" : "https://www.linkedin.com/in/martingalenda/" }>
                                    <FontAwesomeIcon icon={faLinkedinIn} className="fab fa-linkedin-in"/>
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
            </Modal>
            
            <div className="mobile__menu">                
                <div>
                <Link onClick={openNavMobile}>
                    <FontAwesomeIcon icon={faBurger} className="fas fa-bars burgerbutton"/>
                </Link>
                </div>
                <div className="menu__logo ">
                    <a href="#homeSec">
                        <img className="logo__small" src={logo} alt="logo" />
                    </a>
                </div>
                <div className="menu__languages">
                    {
                        texts.lang === "es" ? 
                            <Link onClick={() => {handleLanguageEN()}}>
                                EN <img className="languages__flags" src={en} alt="english" />
                            </Link>
                        :
                            <Link onClick={() => {handleLanguageES()}}>
                                ES <img className="languages__flags" src={es} alt="español" />
                            </Link>                  
                    }
                </div>
            </div>

        </nav>
    )
}

export default NavMobile


