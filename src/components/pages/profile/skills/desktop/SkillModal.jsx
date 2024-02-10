import { List, Box } from '@mui/material'
import { useContext, useState } from 'react'
import LangContext from '../../../../../context/languages'
import SkillsContext from '../../../../../context/skills'

import BallCanvas from './Techs'

const SkillModal = () => {
    const { selectedTech } = useContext(SkillsContext)
    // const { texts } = useContext(LangContext)

    return (
        <section>
            <div style={{
                background: '#000',
                borderRadius: '1rem',
                padding: '6rem 7.25rem 34.25rem',
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(17, 22, 41, 0.00) 0%, rgb(8 11 21 / 21%) 100%)',
                position: 'relative',
                height: '39rem',
                zIndex: '500'
            }}>
                <div className="card-decor-container">
                    <div className="card-decor" />
                </div>
                <h3 style={{
                    fontSize: '2rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    padding: '0 3rem',
                    borderLeft: '0.3rem solid #94a3b8',
                    borderRight: '0.3rem solid #94a3b8',
                    marginBottom: '3rem',
                    lineHeight: '2.5rem'
                }}>
                    {selectedTech?.title}
                </h3>
                <List
                    sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        listStyle: 'disc',
                        color: '#94a3b8',
                        fontSize: '1.15rem',
                        'span': {
                            color: '#e2e8ef'
                        }
                    }}
                >
                    <li>Primer excursión: <span>{selectedTech?.excursion}</span></li>
                    <li>Años de experiencia: <span>{selectedTech?.totalIncursion}</span></li>
                    <li>Zona de aterrizaje: <span>{selectedTech?.aterrizaje}</span></li>

                    <li style={{ marginTop: '1.25rem'}}>Proyectos destacados: <span>Newline</span></li>
                    <li>Recursos adquiridos: <span>Tailwind</span></li>
                    <li>Incursionando: <span>{selectedTech?.enCurso}</span></li>

                </List>
                {/* <h3 style={{textTransform: 'uppercase', marginTop: '1.25rem'}}>Tecnologías destacadas</h3>
                 <Box sx={{ display: 'flex', justifyContent: 'center', mt: '0.5rem' }}>
                    {
                        frontTechs.map((technology) => (
                            <div style={{width: '5rem', height: '7rem'}} key={technology.name}>
                                <BallCanvas icon={technology.icon} name={technology.name} />
                            </div>
                        ))
                    }
                </Box> */}
            </div>
        </section>
    )
}

export default SkillModal