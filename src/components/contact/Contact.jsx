/* Context */
    import { useContext} from 'react';
    import LangContext from '../../context/languages';

/* Img */
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
    import { faTelegram } from '@fortawesome/free-brands-svg-icons'
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

    const { texts } = useContext(LangContext);
    
    return(
        <section className="contactSec">
            <div className="container__close"/>
            <a className="fa-solid fa-xmark xClose"/>

            <div className="contact__form">
                <h2 className="form__title">{texts.contact.title}</h2>
        
                <form action="https://formsubmit.co/martinarielgalenda@gmail.com" method="POST" className="form__container" name="mensajePrivado">
                    <input type="hidden" name="_subject" value="New email MG!"/>
                    <input type="hidden" name="_next" value="http://127.0.0.1:5173/sent"/>
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="text" name="project" autoComplete= "off" required placeholder={texts.contact.project} className="form__input" id="formProyect"/>
                    <input type="text" name="author" autoComplete= "off" required placeholder={texts.contact.author} className="form__input" id="formAuthor"/>
                    <textarea name="resume" placeholder={texts.contact.about} id="formResume" className="form__input form__input--fwd"/>
                    <input type="text" name="contact" required placeholder={texts.contact.contact} className="form__input form__input--tr" id="formContact"/>
                    {/* <input type="submit" className="form__input--submit" id="formSubmit"/> */}
                    <button type="submit" className="form__input--submit" id="formSubmit">{texts.contact.btnSubmit}</button>
                </form>

            </div>

            <div className="welcome__socials ws-position">
                <h2 className="contact__socials">{texts.contact.media}</h2>
                <ol className="socials__list">
                    <li>
                        <a target="_blank" href="mailto:martinarielgalenda@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://t.me/martingalenda">
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href={ texts.lang ==="es" ? "https://www.linkedin.com/in/martingalenda/?locale=es_ES" : "https://www.linkedin.com/in/martingalenda/" }>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </li>
                </ol>
            </div>
        </section>
    )
}

export default Contact