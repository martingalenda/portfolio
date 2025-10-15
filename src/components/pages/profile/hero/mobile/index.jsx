import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TelegramIcon from '@mui/icons-material/Telegram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

import LangContext from '../../../../../context/languages'
import logo from '../img/logo.svg'

const HeroM = () => {

    const { texts } = useContext(LangContext);

    return (
        <section className="mobile_section">
            <div className="background-gradient"/>
            <div className="mobile-home">
                <div className="top-decor" />
                <img className="logo-mg" src={logo} alt="logo"/>
                <nav className="nav-sections">
                    <ol>
                        <li><NavLink to='/about'>{texts.navMobile.profile}</NavLink></li>
                        <li><NavLink to='/experience'>{texts.navMobile.experiences}</NavLink></li>
                        <li><NavLink to='https://martingalenda.github.io/portfolio/cv/cvMGES.pdf' target="_blank" rel="noreferrer">{texts.navMobile.downloadCV}</NavLink></li>
                    </ol>
                </nav>
                <nav className="nav-media">
                    <h4>{texts.navMobile.socialMedia}</h4>
                    <ol>
                        <li>
                            <NavLink to='https://t.me/martingalenda' target="_blank" rel="noreferrer">
                                <IconButton sx={{color: '#e2e8ef'}} aria-label="lang">
                                    <TelegramIcon />
                                </IconButton>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='https://www.linkedin.com/in/martingalenda' target="_blank" rel="noreferrer">
                                <IconButton sx={{color: '#e2e8ef'}} aria-label="lang">
                                    <LinkedInIcon />
                                </IconButton>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='mailto:martinarielgalenda@gmail.com' target="_blank" rel="noreferrer">
                                <IconButton sx={{color: '#e2e8ef'}} aria-label="lang">
                                    <MailOutlineIcon />
                                </IconButton>
                            </NavLink>
                        </li>
                    </ol>
                </nav>
            </div>
        </section>
    )
}

export default HeroM