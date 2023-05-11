/* React */
    import {useState, useEffect} from 'react';

/* Imgs*/
    import logo from './img/logo.svg'

/* Wow animations */
    import WOW from 'wow.js';

/* Context */
    import {useContext} from 'react';
    import LangContext from '../../../context/languages';

/* Modal */
    import {useModals} from "../../../hooks/useModals"
    import Modal from "../../global/modals/Modal"
    import Contact from "../../global/modals/contact/Contact"
    
/* Rutas */
    import { Link } from "react-router-dom";
    
    import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
    import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
    import AttachFileIcon from '@mui/icons-material/AttachFile';
    import FingerprintIcon from '@mui/icons-material/Fingerprint';
    import IconButton from '@mui/material/IconButton';
    import TranslateIcon from '@mui/icons-material/Translate';

    import Tooltip from '@mui/material/Tooltip';

    import SchoolIcon from '@mui/icons-material/School';
    import Lang from './Lang'


const Nav = () => {
    
    const { texts, handleLanguageEN, handleLanguageES  } = useContext(LangContext);

    const [isActiveContact, openContact, closeContact] = useModals()

    useEffect(() => {
        const newWOW = () => {new WOW({live: false}).init();}
        newWOW()
    }, []);

    const [anchorEl, setAnchorEl] = useState(false);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(false);
    };

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
                        <li><a href='#aboutSec'><Tooltip title={texts.nav.about}><FingerprintIcon/></Tooltip></a></li>
                        <li><a href='#skillsSec'><Tooltip title={texts.nav.skills}><MilitaryTechIcon/></Tooltip></a></li>
                        <li><a href='#projectsSec'><Tooltip title={texts.nav.projects}><WorkOutlineIcon/></Tooltip></a></li>
                        <li><a href={texts.nav.cvLink} target="_blank"><Tooltip title={texts.nav.cv}><AttachFileIcon/></Tooltip></a></li>
                        <li><a href="https://martingalenda.github.io/resume" target="_blank"><Tooltip title={texts.nav.learn}><SchoolIcon/></Tooltip></a></li>
                    </ol>
                </div>

                <div className="menu__languages">
                    <IconButton onClick={handleClick} color="secundary" aria-label="delete">
                        <TranslateIcon />
                    </IconButton>
                    <Lang close={handleClose} state={anchorEl} open={open}/>
                </div>
                
            </nav>

            <Modal active={isActiveContact} close={closeContact}>
                <Contact/>
            </Modal> 
        </>
    )
}

export default Nav