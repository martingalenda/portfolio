import { useState, useEffect } from 'react'

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




const LineTime = () => {

    const [cursorPosition, setCursorPosition] = useState(window.innerWidth / 2) // Posicion del cursor en tiempo real
    const [añoMarcado, setAñoMarcado] = useState('2019')
    const [añosDeExperiencia, setAñosDeExperiencia] = useState()
    // const [añosEmpleados, setAñosEmpleados] = useState()

    const [añosLineaDeTiempo, setAñosLineaDeTiempo] = useState()
    const [widthPorMes, setWidthPorMes] = useState()
    
    useEffect(() => {
        const fechaActual =new Date() 
        const añoActual = fechaActual.getFullYear()
        const mesActual = fechaActual.getMonth() + 1

        const añoInicial = 2013
        const mesInicial = 7
        
        const mesesDeExperiencia = ((añoActual - (añoInicial + 1)) * 12) + mesActual + (12 - mesInicial)
        const añosTotalesDeExp = mesesDeExperiencia / 12
        setAñosDeExperiencia(añosTotalesDeExp)
        console.log('años exp:', añosTotalesDeExp)

        const añosLineaDeTiempo = (100 * añosTotalesDeExp) / 72
        setAñosLineaDeTiempo(añosLineaDeTiempo)
        console.log('años linea tiempo:', añosLineaDeTiempo)

        const widthParaCadaMes = (window.innerWidth / (añosLineaDeTiempo * 12))
        setWidthPorMes(widthParaCadaMes)
        console.log('width por mes:', widthParaCadaMes)

        // const tiemposEmpleados = {
        //     newline: (54 * 100 / mesesDeExperiencia),
        //     kucoin: (19 * 100 / mesesDeExperiencia),
        //     bloyd: (40 * 100 / mesesDeExperiencia),
        //     resolvit: (9 * 100 / mesesDeExperiencia) // calcular meses en base a la fecha actual
        // }
        // setAñosEmpleados(tiemposEmpleados)
        // console.log(tiemposEmpleados)
    }, [])

    const handleMouseMove = (event) => {
        // Ancho del Viewport Width
        const viewportWidth = window.innerWidth
        const rangeStart = viewportWidth * 0.14
        const rangeEnd = viewportWidth * 0.86
    
        // Calcular el porcentaje de la posición del cursor dentro del rango
        const percentage = ((event.clientX - rangeStart) / (rangeEnd - rangeStart)) * 100
        const currentYearValue = Math.round((añosDeExperiencia * percentage) / 100) + 2013
        setAñoMarcado(currentYearValue.toString())

        setCursorPosition(event.clientX) // Posicion en el eje X
        // console.log(cursorPosition)
    }

    return (
        <>
            <div className="lineTime" onMouseMove={handleMouseMove}>
                <div className="lineTime__cursor" style={{ left: cursorPosition }}>
                    <span style={{position: 'absolute', top: '-2rem', left: '-1rem'}}>{añoMarcado}</span>
                </div>

                <div style={{ height: '100%', display: 'flex' }}>
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

                <div style={{ 
                    // width: `${widthPorMes * añosDeExperiencia}%`,
                    position: 'absolute',
                    height: '10%',
                    bottom: '0',
                    margin: 'auto',
                    left: '0',
                    right: '0',
                    height: '100%',
                    zIndex: '300',
                    display: 'flex',
                    cursor: 'pointer',
                    color: '#ffffff29',
                    width: '72%',
                    '& span': {
                        paddingBottom: '1rem' 
                    }
                    }}
                >
                    <div 
                        onClick={() => console.log('newline')} 
                        className="newline" 
                        style={{ 
                            width: '46.91%', 
                            background: 'rgba(0, 233, 255, 0.05)', 
                            display: 'flex', 
                            paddingBottom: '1rem', 
                            justifyContent: 'center', 
                            alignItems: 'center'
                        }}
                    >
                        <span>Newline</span>
                    </div>
                    <div 
                        onClick={() => console.log('kucoin')}
                        className="kucoin"
                        style={{ 
                            width: '14.96%', 
                            background: 'rgb(42 255 52 / 5%)', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center' 
                        }}
                    >
                        <span>KuCoin & 8-Bits</span>
                    </div>
                    <div 
                        onClick={() => console.log('bloyd')}
                        className="bloyd" 
                        style={{ 
                            width: '31.05%', 
                            background: 'rgb(255 42 221 / 5%)', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center' 
                        }}
                    >
                        <span>Bloyd</span>
                    </div>
                    <div 
                        onClick={() => console.log('resolvit')}
                        className="resolvit"
                        style={{ 
                            width: '7.08%', 
                            background: 'rgb(255 57 42 / 5%)', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center' 
                        }}
                    >
                        <span>Resolvit</span>
                    </div>
                </div>
            </div>
        </>
    )
}



const NewExperience = () => {

    return (
        <section className="section experiencesSec">
            <LineTime />
        </section>
    )
}

export default NewExperience