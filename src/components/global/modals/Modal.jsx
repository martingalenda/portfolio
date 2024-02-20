import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import WOW from 'wow.js'

const Modal = ({children, active, close}) => { 

    useEffect(() => {
        if (active) {
            const newWOW = () => new WOW({live: false}).init()
            newWOW()
        }
    }, [active]);
    
    useEffect(() => {
        // Detecta si el usuario apreta escape para cerrar el modal
        const detectEsc = (e) => {
            if (e.key === 'Escape') {
                close()  
            }
        }
        document.addEventListener('keyup', detectEsc)
        return () => {
            document.removeEventListener('keyup', detectEsc)
        }
    })
        
    return ReactDOM.createPortal(
        <>
            {
            active &&
                <section className="modal wow animate__fadeIn" data-wow-duration="1s">        
                    <div className="modal__close" onClick={close} />
                    {children}    
                </section>
            }  
        </>,
        document.getElementById("modals")
    );
    
}

export default Modal;