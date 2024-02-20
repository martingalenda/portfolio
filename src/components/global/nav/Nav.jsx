import {useState} from 'react';
import {useContext} from 'react';
import { NavLink } from "react-router-dom";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import IconButton from '@mui/material/IconButton';
import TranslateIcon from '@mui/icons-material/Translate';
import SchoolIcon from '@mui/icons-material/School';
import Tooltip from '@mui/material/Tooltip';

import logo from './img/logo.svg'
import Lang from './Lang'

import LangContext from '../../../context/languages';
import {useModals} from "../../../hooks/useModals"
import Modal from "../../global/modals/Modal"
import Contact from "../../global/modals/contact/Contact"

const Nav = () => {
    
    const { texts, handleLanguageEN, handleLanguageES  } = useContext(LangContext);

    const [isActiveContact, openContact, closeContact] = useModals()

    const [anchorEl, setAnchorEl] = useState(false);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
      setAnchorEl(false);
    }
    
    return(
        <> 
            <nav className="header__menu">

                <div className="menu__logo">
                    <NavLink to='/portfolio'>
                        <img className="logo__small" src={logo} alt="logo"/>
                    </NavLink>
                </div>

                <div className="menu__options">
                    <ol className="options__list">
                        <li><Tooltip title={texts.nav.about}><NavLink to='/about'><FingerprintIcon/></NavLink></Tooltip></li>
                        <li><Tooltip title={texts.nav.skills}><NavLink to='/skills'><MilitaryTechIcon/></NavLink></Tooltip></li>
                        <li><Tooltip title={texts.nav.projects}><NavLink to='/experience'><WorkOutlineIcon/></NavLink></Tooltip></li>
                        <li><Tooltip title={texts.nav.cv}><a href={texts.nav.cvLink} target="_blank"><AttachFileIcon/></a></Tooltip></li>
                        <li><Tooltip title={texts.nav.learn}><a href="https://martingalenda.github.io/resume" target="_blank"><SchoolIcon/></a></Tooltip></li>
                    </ol>
                </div>

                <div className="menu__languages">
                    <IconButton onClick={handleClick} sx={{color: '#e2e8ef'}} aria-label="delete">
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