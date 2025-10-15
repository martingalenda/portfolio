import { useContext } from 'react'
import Box from '@mui/material/Box'

import SkillsM from '../../skills/mobile'
import LangContext from '../../../../../context/languages'
import NavMobile from '../../../../global/nav/NavMobile'

const AboutM = () => {

    const { texts  } = useContext(LangContext)

    return (
        <div className="mobile_section">
            <NavMobile />
            <section>
                <div style={{ padding: '9rem 2.5rem 0' }}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
                        <div 
                            style={{
                                borderLeft: '0.2rem solid #94A3B8', 
                                paddingLeft: '1rem',
                            }}
                        >
                            <h3>Martín Galenda</h3>
                            <h3 style={{fontSize: '1.25rem'}}>PL - UI Developer</h3>
                        </div>
                        <p dangerouslySetInnerHTML={{__html: texts.aboutMobile.intro}}/>
                    </div>
                    <SkillsM />
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

export default AboutM