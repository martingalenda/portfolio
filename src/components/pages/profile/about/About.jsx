import { useContext, useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import WOW from 'wow.js';

import eye from './img/eye.png'
import ship from './img/ship.png'
import LangContext from '../../../../context/languages'

const About = () => {
    
    const [activeAnimation, setActiveAnimation] = useState(false)

    useEffect(() => {
        const setAnimation = () => setActiveAnimation(true)
        setTimeout(setAnimation , 1500)
    },[])

    useEffect(() => {
        const newWOW = () => new WOW({live: false}).init()
        newWOW()
    }, []);

    const { texts  } = useContext(LangContext);

 
    return(
        <section className="about gCenter">
            <div className="aboutme__container">

                <div className="container__title">
                    <h2 className="title__txt wow animate__fadeIn" data-wow-duration="3.5s" style={{display: 'flex', alignItems:'center', gap: '0.25em'}}>
                        {texts.about.title} <FingerprintIcon sx={{fontSize: '0.75em', mt: '0.1em', color: '#9aabc4'}}/>
                    </h2>
                    <img className={`media__nav ${activeAnimation ? 'custom__animation' : ''} wow animate__zoomInLeft`} data-wow-duration="1.5s" src={ship} alt="ship"/>
                </div>

                <div className="container__about wow animate__fadeIn" data-wow-duration="3.5s">
                    <div style={{ paddingLeft: '1rem', borderLeft: '0.2rem solid #e2e8ef' }}>
                        <p>
                            <strong style={{fontWeight: '400'}}> Martín Galenda <br/> {texts.about.born} </strong>
                        </p>
                    </div>

                    <div className="about__cv">
                        <Link to={texts.lang === "es" ? "/cv/cvMGES.pdf" : "/cv/cvMGEN.pdf" } target="_blank" >
                            <img className="small-eye" src={eye} alt="view"/> 
                            {texts.about.viewCV}
                        </Link>
                    </div>
                </div>

                <div className="description__info wow animate__fadeIn" data-wow-duration="3.5s">
                    <p dangerouslySetInnerHTML={{__html: texts.about.intro}} />
                    <p style={{margin: 'auto', backgroundColor: 'rgb(93 102 95 / 3%)', border: '1px solid #243345', padding: '0.5em 2em', borderRadius: '0.75em'}}>{texts.about.eslogan}</p>
                </div>

            </div>
        </section> 
    )
}

export default About