import { useContext} from 'react';
import { Link } from "react-router-dom";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import eye from './img/eye.png'
import ship from './img/ship.png'
import LangContext from '../../../../context/languages';

const About = () => {
    
    const { texts  } = useContext(LangContext);
 
    return(
        <section className="section aboutSec gCenter">
            <div className="aboutme__container">

                <div className="container__title">
                    <h2 className="title__txt" style={{display: 'flex', alignItems:'center', gap: '0.25em'}}>
                        {texts.about.title} <FingerprintIcon sx={{fontSize: '0.75em', mt: '0.1em', color: '#9aabc4'}}/>
                    </h2>
                    <img className="media__nav" src={ship} alt="ship"/>
                </div>

                <div className="container__about">
                    <div className="">
                        <p>
                            <strong style={{fontWeight: '400'}}> Martín Galenda <br/> {texts.about.born} </strong>
                        </p>
                    </div>

                    <div className="about__cv">
                        <Link to={texts.lang === "es" ? "/portfolio/cv/cvMGES.pdf" : "/portfolio/cv/cvMGEN.pdf" } target="_blank" >
                            <img className="small-eye" src={eye} alt="view"/> 
                            {texts.about.viewCV}
                        </Link>
                    </div>
                </div>

                <div className="description__info">
                    <p>{texts.about.intro}</p>
                    <p style={{margin: 'auto', backgroundColor: 'rgb(7 11 34 / 17%)' , padding: '0.5em 2em', borderRadius: '0.75em'}}>{texts.about.eslogan}</p>
                </div>

            </div>
        </section> 
    )
}

export default About