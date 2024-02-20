import { Fragment, useState } from 'react'

import { PROYECTOS, LineTimeBlock } from './constants'

const LineTime = ({ setProyectoID }) => {

    const [cursorPosition, setCursorPosition] = useState( 14 * window.innerWidth / 100) // Posicion del cursor en tiempo real
    const [añoMarcado, setAñoMarcado] = useState('2013')
    const [proyecto, setProyecto] = useState('Newline')

    const handleMouseMove = (event) => {
        let block_width = 0      
        if (window.innerWidth >= 3819) {
            block_width = 265.594
        } else {
            block_width = 132.8
        }
        const cursorEnElAño = 2011 + Math.round(event.clientX / block_width) 
        setAñoMarcado(cursorEnElAño.toString())
        setCursorPosition(event.clientX) // Posicion en el eje X
    }

    return (
        <>
            <div 
                className="lineTime wow animate__fadeInUp" data-wow-duration="0.75s" 
                onMouseMove={handleMouseMove}
            >
                <div className="lineTime__cursor" style={{ left: cursorPosition }}>
                    <span> 
                        {proyecto} <br/> <strong>{añoMarcado}</strong>
                    </span>
                </div>
                
                <div className="lineTime__projects">
                    {
                        PROYECTOS.map((proyecto, i) => {
                            return (
                                <div
                                    key={i}
                                    onMouseEnter={() => {
                                        setProyecto(proyecto.name)
                                        setProyectoID(i)
                                    }} 
                                    className={proyecto.name} 
                                    style={{ 
                                        width: proyecto.width, 
                                        // background: proyecto.bg, 
                                        display: 'flex', 
                                        justifyContent: 'center', 
                                        alignItems: 'center',
                                        marginRight: proyecto.mr
                                    }}
                                />
                            )
                        })
                    }
                </div>
                <div className="lineTime__reference">
                    {
                        PROYECTOS.map((proyecto, i) => {
                            return (
                                <div
                                    key={i}
                                    style={{ 
                                        width: proyecto.width, 
                                        background: proyecto.bg, 
                                        display: 'flex', 
                                        justifyContent: 'center', 
                                        alignItems: 'center',
                                        marginRight: proyecto.mr,
                                        height: '0.5rem'
                                    }}
                                />
                            )
                        })
                    }
                </div>
            </div>

            <div className="wow animate__fadeInUp lineTime__bloque__container" data-wow-duration="1s" >
                {[...Array(15)].map((_, index) => (
                    <LineTimeBlock key={index} id={index} />
                ))}
            </div>
        </>
    )
}

export default LineTime
