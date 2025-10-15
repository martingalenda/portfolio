import { useState, useContext } from 'react'
import IconButton from '@mui/material/IconButton'
import TranslateIcon from '@mui/icons-material/Translate'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'

import LangContext from '../../../context/languages'

import en from './img/en.png'
import es from './img/es.png'
import Lang from './Lang'

const NavMobile = () => {
    
    const [ drawerState, setDrawerState ] = useState(false)
    const { handleLanguageEN, handleLanguageES  } = useContext(LangContext);

    return(
        <>
            <div className="nav_mobile-container mobile_section">
                <div className="top-gradient"/>
                <nav className="nav_mobile">
                    <div className="go-home">
                        <NavLink to='/'>
                            <IconButton sx={{color: '#e2e8ef'}} aria-label="lang">
                                <MenuIcon />
                            </IconButton>
                        </NavLink>
                    </div>
                    <div className="menu__languages">
                        <IconButton sx={{color: '#e2e8ef'}} aria-label="lang" onClick={() => setDrawerState(true)}>
                            <TranslateIcon />
                        </IconButton>
                        <Lang />
                    </div>
                </nav>
                {/* <div className="bottom-gradient"/> */}
            </div>
            <Drawer
                anchor="top"
                open={drawerState}
                onClose={() => setDrawerState(false)}
                sx={{
                    backdropFilter: 'blur(0.12rem)'
                }}
            >
                <Box sx={{ 
                        background: '#080c1d', 
                        color: '#E2E8EF', 
                        listStyle: 'none', 
                        '& li': { 
                            display: 'flex', 
                            padding: '2rem 0', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            gap: '0.5rem',
                            cursor: 'pointer'
                        }
                    }}
                >
                    <li 
                        onClick={
                            () => {
                                handleLanguageES()
                                setDrawerState(false)
                            }
                        } 
                        style={{ borderBottom: '0.1rem solid rgb(35 44 77 / 30%)'}}
                    >
                        ESPAÑOL <img style={{ width: '2em', marginLeft: '0.5em' }} src={es} alt="Español"/>
                    </li>
                    <li 
                        onClick={
                            () => {
                                handleLanguageEN()
                                setDrawerState(false)
                            }
                        }
                    >
                        ENGLISH <img style={{width: '2em', marginLeft: '0.5em'}} src={en} alt="English"/>
                    </li>
                </Box>
            </Drawer>
        </>
    )
}

export default NavMobile


