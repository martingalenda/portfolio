
import { useContext } from 'react'
import LangContext from '../../../context/languages'

const Error404 = () => {

    const { texts  } = useContext(LangContext)
    
    return(
        <>
            <div className="desktop_section">
                <section style={{height: '100vh', display: 'flex', alignItems: 'center'}}>
                    <div>
                        <div className="animation-container">
                            <p style={{
                                position: 'absolute',
                                right: '-16rem',
                                background: 'rgba(10, 14, 31, 0.54)',
                                padding: '1.25rem 3.25rem',
                                top: '-4rem',
                                borderRadius: '1.5rem',
                                maxWidth: '17rem',
                                color: '#94a3b8'
                            }}>{texts.error.houston}</p>
                            <img className="astronaut" src="/portfolio/floater.png" alt="astronaut"/>
                        </div>
                    </div>
                    <h4 style={{
                        position: 'absolute',
                        fontSize: '14rem',
                        color: '#121931',
                        zIndex: '0',
                        textShadow: 'rgb(66, 86, 101) 1px 1px 0px, rgb(0 0 0 / 0%) -1px -1px 0px, rgb(0 0 0 / 0%) 1px -1px 0px, rgb(23 34 105) -1px 1px 0px',
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center'
                    }}>ERROR-404</h4>
                </section>
            </div>
        </>
    )
}

export default Error404