import { useContext} from 'react'
import LangContext from '../../../../context/languages'

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

        </section>
    )
}

export default Contact