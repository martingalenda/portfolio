import { useContext, useEffect, useState } from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import PushPinIcon from '@mui/icons-material/PushPin';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box'

import LangContext from '../../../../../context/languages'
import NavMobile from '../../../../global/nav/NavMobile';

const ExperiencesM = () => {

    const { texts } = useContext(LangContext)

    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects([...texts.experiencesMobile.experience].reverse())
    }, [texts])

    return (
        <div className="mobile_section">
            <NavMobile />
            <section>
                <div style={{ padding: '3rem 2.5rem' }}>
                    <div style={{ marginTop: '5.25rem', overflow: 'visible', width: '100%', paddingLeft: '1rem' }}>
                        <div style={{ marginLeft: '-0.25rem' }}>
                            <h2>{texts.experiencesMobile.title}</h2>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', borderLeft: '0.2rem solid #94A3B8', margin: '2rem 0'}}>
                            {
                                projects.map((project, i) => {
                                    return (
                                        <div key={i} style={{ paddingLeft: '2.25rem', position: 'relative' }}>
                                            <ModeStandbyIcon
                                                sx={{
                                                    position: 'absolute',
                                                    top: '-0.25rem',
                                                    left: '-1.32rem',
                                                    background: '#111932',
                                                    color: 'rgb(148, 163, 184)',
                                                    fontSize: '2.5rem',
                                                    borderRadius: '100%'
                                                }} />
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                                <h4 style={{textShadow: '0 0 0.3rem #8eaae0'}}><StarBorderIcon /> {project.rol}</h4>
                                                <h4><PushPinIcon /> {project.project} <small><ShutterSpeedIcon /> {project.dates}</small></h4>
                                                <h5><AccountBalanceIcon /> {project.industry}</h5>
                                            </div>
                                            <p style={{marginTop: '1.25rem'}} dangerouslySetInnerHTML={{ __html: project.description }} />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Box sx={{
                height: '100vh',
                background: 'radial-gradient(78% 50% at 50% 50%, #1e2c53 0%, rgb(6 10 28 / 79%) 100%)',
                position: 'fixed',
                top: '0',
                left: '0',
                bottom: '0',
                right: '0',
                zIndex: '-1'
            }}/>
        </div>
    )
}

export default ExperiencesM