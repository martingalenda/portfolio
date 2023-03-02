/* React */
    import {useEffect} from 'react';

/* Imgs*/
    import logo from './img/logo.png'
    import en from './img/en.png'
    import es from './img/es.png'

/* Wow animations */
    import WOW from 'wow.js';

/* Context */
    import {useContext} from 'react';
    import LangContext from '../../context/languages';

/* Modal */
    import {useModals} from "../../hooks/useModals"
    import Modal from "../modals/Modal"
    import Contact from "../contact/Contact"

/* Rutas */
    import { Link } from "react-router-dom";


const Nav = () => {
    
    const { texts, handleLanguageEN, handleLanguageES  } = useContext(LangContext);

    const [isActiveContact, openContact, closeContact] = useModals()

    useEffect(() => {
        const newWOW = () => {new WOW({live: false}).init();}
        newWOW()
    }, []);

    return(
        <> 
            <nav className="header__menu wow animate__fadeIn" data-wow-duration="1.5s" id="#menu">

                <div className="menu__logo">
                    <a href='#homeSec'>
                        <img className="logo__small" src={logo} alt="logo"/>
                    </a>
                </div>

                <div className="menu__options">
                    <ol className="options__list">
                        <li><a href='#aboutSec'>{texts.nav.about}</a></li>
                        <li><a href='#skillsSec'>{texts.nav.skills}</a></li>
                        <li><a href='#projectsSec'>{texts.nav.projects}</a></li>
                        <li>
                            <Link onClick={openContact}>
                                {texts.nav.contact}
                            </Link>
                        </li>
                    </ol>
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
                
            </nav>

            <Modal active={isActiveContact} close={closeContact}>
                <Contact/>
            </Modal> 
        </>
    )
}

export default Nav