/* React */
    import {useState, useEffect} from 'react';
/* Rutas */
    import { Link } from "react-router-dom";
/* Wow animations */
    import WOW from 'wow.js';
/* Imgs*/
    import logo from './img/logo.png'
    import en from './img/en.png'
    import es from './img/es.png'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import SegmentIcon from '@mui/icons-material/Segment';

/* Context */
    import {useContext} from 'react';
    import LangContext from '../../../context/languages';
/* Modal */
    import {useModals} from "../../../hooks/useModals"
    import Modal from "../../global/modals/Modal"

    import IconButton from '@mui/material/IconButton';
    import TranslateIcon from '@mui/icons-material/Translate';
    import Lang from './Lang'


const NavMobile = () => {
    
    const { texts, handleLanguageEN, handleLanguageES  } = useContext(LangContext);
    const [isActiveNavMobile, openNavMobile, closeNavMobile] = useModals()

    const [anchorEl, setAnchorEl] = useState(false);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(false);
    };

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
                </div>
            </Modal>
            
            <div className="mobile__menu">                
                <div>
                <Link onClick={openNavMobile}>
                    <SegmentIcon sx={{fontSize: '2em'}}/>
                </Link>
                </div>
                <div className="menu__logo ">
                    <a href="#homeSec">
                        <img className="logo__small" src={logo} alt="logo" />
                    </a>
                </div>
                <div className="menu__languages">
                    <IconButton onClick={handleClick} color="secundary" aria-label="delete">
                        <TranslateIcon  sx={{fontSize: '1.5em'}}/>
                    </IconButton>
                    <Lang close={handleClose} state={anchorEl} open={open}/>
                </div>
            </div>

        </nav>
    )
}

export default NavMobile


