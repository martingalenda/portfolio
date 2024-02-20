import { useEffect, useState } from 'react'
import WOW from 'wow.js';
import { Box } from '@mui/material'

import Projects from './Projects/Projects'
import LineTime from './LineTime'
import { theme } from '../../../../../config/theme.config';

const NewExperience = () => {

    const [proyectoID, setProyectoID] = useState(0)

    useEffect(() => {
        const newWOW = () => new WOW({live: false}).init()
        newWOW()
    }, []);
    

    return (
        <section className="experience">
            <Projects proyectoID={proyectoID} />
            <div 
                className="wow animate__fadeInDown" data-wow-duration="1s"
                style={{
                    width: '100vw',
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    left: '0',
                    height: '100vh',
                    top: '0',
                    display: 'flex',
                    placeContent: 'center',
                    placeItems: 'center',
                    zIndex: '0'
                }}
            >
                <Box 
                    sx={{
                        width: '60%',
                        height: '60%',
                        border: '0.1em solid transparent',
                        borderImage: 'linear-gradient(180deg,rgb(80 89 109),rgba(191,191,191,0))',
                        borderImageSlice: '1',
                        position: 'absolute',
                        marginTop: '7rem',
                        [theme.breakpoints.only('xxl')]: {
                            marginTop: '6rem'
                        }
                    }}
                >

                {/* Industria */}
                <div
                    style={{
                        background: 'linear-gradient(0deg, rgb(17 25 51), rgb(23 32 61))',
                        width: '0.1rem',
                        position: 'absolute',
                        top: '12rem',
                        left: '-0.1rem',
                        height: '20rem',
                    }}
                />
                {/* Prof */}
                <div
                    style={{
                        background: 'rgb(19 28 54)',
                        width: '19.05rem',
                        position: 'absolute',
                        top: '-0.1rem',
                        left: '3.75rem',
                        height: '0.1rem'
                    }}
                />
                {/* Logo */}
                <div
                    style={{
                        background: 'rgb(19 28 54)',
                        width: '10rem',
                        position: 'absolute',
                        top: '-0.1rem',
                        left: '30.865rem',
                        height: '0.1rem'
                    }}
                />
                {/* Fechas */}
                <div
                    style={{
                        background: 'rgb(19 28 54)',
                        width: '13rem',
                        position: 'absolute',
                        top: '-0.1rem',
                        right: '7rem',
                        height: '0.1rem'
                    }}
                />


                </Box>
            </div>
            <LineTime setProyectoID={setProyectoID} />
        </section>
    )
}

export default NewExperience