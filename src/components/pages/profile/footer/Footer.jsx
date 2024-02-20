import { useContext } from 'react'
import { Link } from "react-router-dom"

import planet from './img/planet.png'
import navs from './img/navs.png'
import nav from './img/nav.png'

import LangContext from '../../../../context/languages';

const Footer = () => {
    
    const { texts  } = useContext(LangContext);

    return(
        <section className="section bye">
            <footer className="adew">
                <div className="adew__container">
                    <h2>{texts.footer.title}</h2>
                    <Link className="container__contactNow txt_changed" target="_blank" to="mailto:martinarielgalenda@gmail.com">
                        <p id="t1">- {texts.footer.together.t1} -</p>
                        <p id="t2">- {texts.footer.together.t2} -</p>
                        <p id="t3">- {texts.footer.together.t3} -</p>
                    </Link>
                    <a className="go-top" href="#home"></a>
                    <img className="adew__planet" src={planet} alt="planet" />
                </div>
            </footer>

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
    )
}

export default Footer