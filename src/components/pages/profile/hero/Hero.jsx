/* React */
    import {useEffect} from 'react';

/* Context */
    import { useContext } from 'react';
    import LangContext from '../../../../context/languages';

/* Wow animations */
    import WOW from 'wow.js';

    import { motion } from "framer-motion";
    import { slideIn } from "../../../../utils/motion";
    import Planet from './Planet';
    import CircularTxt from '../../../global/circularTxt/CircularTxt';
    import Fab from '@mui/material/Fab';
    import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
    import Box from '@mui/material/Box';

/* Modal */
    import {useModals} from "../../../../hooks/useModals"
    import Modal from "../../../global/modals/Modal"
    import Contact from "../../../global/modals/contact/Contact"

const Hero = () => {

    const { texts  } = useContext(LangContext);
    const [isActiveContact, openContact, closeContact] = useModals()


    useEffect(() => {
        const newWOW = () => {new WOW({live: false}).init();}
        newWOW()
    }, []);
 
    return(
        <>
            <section className="section homeSec hero gCenter wow animate__fadeInDown" data-wow-duration="2s">   
                <motion.div
                    variants={slideIn("top", "tween", 0.2, 2)}
                    className="planet__dimension"
                    style={{flex: '1'}}
                >
                    <Planet/> 
                </motion.div>
                <CircularTxt text="- UX /UI Developer - Project Manager "/> 
                <Fab className="hire__btn" color="secondary" aria-label="Hire me" onClick={() => openContact()}>
                    <small style={{fontSize: '1.1em', letterSpacing: '0.1em'}}>{texts.home.hire}</small>
                </Fab>
                <Box sx={{position: 'absolute', bottom: '4em', right: '0', left: '0'}}>
                    <KeyboardDoubleArrowDownIcon sx={{fontSize: '2em'}} className="next-sec"/>
                </Box>

            </section>

            <Modal active={isActiveContact} close={closeContact}>
                <Contact/>
            </Modal> 
        </>
    )
}

export default Hero