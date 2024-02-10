import { useState, useEffect, useRef } from 'react'

import nave from '../img/nave.png'

const LineTimeBlock = () => {
    return (
        <div className="lineTime__bloque">
            <div className="año"/>
            <div className="mes"/>
            <div className="mes"/>
            <div className="mes"/>
            <div className="mes"/>
            <div className="mes"/>
            <div className="mes"/>
        </div>
    )
}




const LineTime = ({setProyectoID}) => {

    const [cursorPosition, setCursorPosition] = useState(window.innerWidth / 2) // Posicion del cursor en tiempo real
    const [añoMarcado, setAñoMarcado] = useState('2013')
    const [proyecto, setProyecto] = useState('Newline')

    const handleMouseMove = (event) => {
        const cursorEnElAño = 2011 + Math.round(event.clientX / 265.594) // ! CORREGIR PARA RESPONSIVE
        setAñoMarcado(cursorEnElAño.toString())
        setCursorPosition(event.clientX) // Posicion en el eje X
    }

    return (
        <>
            <div className="lineTime" onMouseMove={handleMouseMove} onMouseEnter={() => setProyecto('')} >
                <div className="lineTime__cursor" style={{ left: cursorPosition }}>
                    <span style={{position: 'absolute', top: '-4rem', left: '-3.85rem', textAlign:'center', width: '8rem'}}>{proyecto} <br/> {añoMarcado}</span>
                </div>
                <div style={{ width: '100%', height: '100%'}}>
                </div>
                <div 
                    style={{
                        position: 'absolute',
                        height: '100%',
                        bottom: '0',
                        padding: '0 12% 0 14%',
                        left: '0',
                        right: '0',
                        height: '100%',
                        zIndex: '300',
                        display: 'flex',
                        cursor: 'pointer',
                        color: '#ffffff29',
                        width: '100%'
                    }}
                >
                    <div 
                        onMouseEnter={() => {
                            setProyecto('Newline') 
                            setProyectoID(0)
                            }
                        } 
                        className="newline" 
                        style={{ 
                            width: '42.1%', 
                            background: 'rgb(0 155 255 / 2%)', 
                            display: 'flex', 
                            paddingBottom: '1rem', 
                            justifyContent: 'center', 
                            alignItems: 'center'
                        }}
                    />
                    <div 
                        onMouseEnter={() => {
                            setProyecto('Kucoin & 8-Bits') 
                            setProyectoID(1)
                            }
                        } 
                        className="kucoin"
                        style={{ 
                            width: '15.96%', 
                            background: 'rgb(164 179 255 / 2%)', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            marginRight: '3.63rem'
                        }}
                    />
                    <div 
                        onMouseEnter={() => {
                            setProyecto('Bloyd') 
                            setProyectoID(2)
                            }
                        }
                        className="bloyd" 
                        style={{ 
                            width: '31.05%', 
                            background: 'rgb(255 42 221 / 2%)', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center' 
                        }}
                    />
                    <div 
                        onMouseEnter={() => {
                            setProyecto('Resolvit') 
                            setProyectoID(3)
                            }
                        } 
                        className="resolvit"
                        style={{ 
                            width: '7.08%', 
                            background: 'rgb(255 57 42 / 2%)', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center' 
                        }}
                    />
                </div>
            </div>

            <div style={{ height: '100%', display: 'flex', height: '5rem', position: 'absolute', bottom: '0', left: '-4.5rem', opacity: '0.45' }}>
                <LineTimeBlock />
                <LineTimeBlock />
                <LineTimeBlock />
                <LineTimeBlock />
                <LineTimeBlock />
                <LineTimeBlock />
                <LineTimeBlock />
                <LineTimeBlock />
                <LineTimeBlock />
                <LineTimeBlock />
                <LineTimeBlock />
                <LineTimeBlock />
                <LineTimeBlock />
                <LineTimeBlock />
                <LineTimeBlock />
            </div>
        </>
    )
}




const NewExperience = () => {

    const projectsRef = useRef(null)
    const [proyectoID, setProyectoID] = useState(0)

    const projectStyles = {
        width: '100vw',
        minWidth: '100vw', 
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3rem',
        fontWeight: 'bold'
    }

    useEffect(() => {
        const projectsNode = projectsRef.current
        const project = projectsNode.querySelectorAll('ul > div')[proyectoID]
    
        if (project) {
          project.scrollIntoView({
            behavior: "smooth"
          });
        }
    
      }, [proyectoID])

    return (
        <section className="section experiencesSec">
            <ul 
                ref={projectsRef} 
                style={{
                    width: '100vw',
                    height: '100%', 
                    overflowX: 'hidden',
                    display: 'flex'
                }}>
                <div style={projectStyles}>Newline</div>
                <div style={projectStyles}>Kucoin & 8-Bits</div>
                <div style={projectStyles}>Bloyd</div>
                <div style={projectStyles}>Resolvit</div>
            </ul>
            <LineTime setProyectoID={setProyectoID}/>
        </section>
    )
}

export default NewExperience