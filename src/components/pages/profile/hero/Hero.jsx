import { useEffect, useContext, useState } from 'react'
import Fab from '@mui/material/Fab'
import Box from '@mui/material/Box'
import WOW from 'wow.js'
import { motion } from "framer-motion"

import navs from './img/navs.png'
import nav from './img/nav.png'
import Planet from './Planet'

import { slideIn } from "../../../../utils/motion"
import { useModals } from "../../../../hooks/useModals"
import LangContext from '../../../../context/languages'
import CircularTxt from '../../../global/circularTxt/CircularTxt'
import Modal from "../../../global/modals/Modal"
import Contact from "../../../global/modals/contact/Contact"

const Hero = () => {

    const { texts  } = useContext(LangContext);
    const [isActiveContact, openContact, closeContact] = useModals()
    const [ wowActive, setWowActive ] = useState(true)
    
    const handlerOpenContact = () => {
        openContact()
        setWowActive(false)
    }

    useEffect(() => {
        const newWOW = () => new WOW({live: false}).init()
        newWOW()
      }, []);
 
    return(
        <>
            <section className="home hero">   
                <motion.div
                    variants={slideIn("top", "tween", 0.2, 2)}
                    className={`planet__dimension ${wowActive ? 'wow animate__fadeIn' : ''}`}
                    data-wow-duration="3s"
                    style={{flex: '1'}}
                >
                    <Planet/> 
                </motion.div>
                <Box sx={{
                    position: 'absolute',
                    bottom: '3rem',
                    left: '3rem',
                    zIndex: '1',
                    '& .contact__btn': {
                        transition: '0.5s all',
                        color: '#e2e8ef'
                    },
                    '&:hover .contact__btn': {
                        background: 'radial-gradient(50% 50% at 50% 50%, #5b98ff47 0%, rgb(8 9 19 / 59%)) !important',
                        color: '#b0c8ff !important',
                        textShadow: '2px 2px 12px #000',
                        boxShadow: '0 0 1.25rem #8db7ff',
                    }
                    }}
                className={`${wowActive ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3s">
                    <CircularTxt text="- React UI Developer - TL ( APM / PO )" /> 
                    <Fab className="contact__btn" aria-label="Contact" onClick={handlerOpenContact}>
                        <small style={{fontSize: '1.1em', letterSpacing: '0.1em'}}>{texts.home.hire}</small>
                    </Fab>
                </Box>
                <img 
                className="animated__nav3"
                src={nav} 
                alt="navs" 
                />

                <img 
                    className="animated__nav2"
                    src={navs} 
                    alt="navs" 
                />
            </section>

            <Modal active={isActiveContact} close={closeContact}>
                <Contact/>
            </Modal>
        </>
    )
}

export default Hero