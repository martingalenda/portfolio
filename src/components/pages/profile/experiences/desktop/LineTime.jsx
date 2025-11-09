import { Fragment, useState, useEffect } from 'react'

import { PROYECTOS, LineTimeBlock } from './constants'

const LineTime = ({ setProyectoID }) => {

    const [cursorPosition, setCursorPosition] = useState( 15 * window.innerWidth / 100) // Posicion del cursor en tiempo real
    const [añoMarcado, setAñoMarcado] = useState('2013')
    const [proyecto, setProyecto] = useState('Newline')

    const [yearBlockPixelWidth, setYearBlockPixelWidth] = useState(0);

    useEffect(() => {
        // Calcula el valor en píxeles de 1rem (el tamaño de fuente del elemento raíz)
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        // Calcula el ancho en píxeles de un bloque de año (8.3rem)
        setYearBlockPixelWidth(8.3 * rootFontSize);

        const handleResize = () => {
            const newRootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
            setYearBlockPixelWidth(8.3 * newRootFontSize);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMouseMove = (event) => {
        const block_width = yearBlockPixelWidth || 132.8;
        const cursorEnElAño = 2012 + Math.round(event.clientX / block_width) 
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
