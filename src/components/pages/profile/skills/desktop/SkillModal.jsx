import { List } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import LangContext from '../../../../../context/languages'
import SkillsContext from '../../../../../context/skills'

const SkillModal = ({toClose}) => {

    const { selectedTech } = useContext(SkillsContext)
    const { texts } = useContext(LangContext)

    const [currentIndexProject, setCurrentIndexProject] = useState(0);
    const nextProject = () => {
      setCurrentIndexProject((prevIndex) => (prevIndex + 1) % selectedTech?.proyectosDestacados.length)
    }
    useEffect(() => {
      const interval = setInterval(nextProject, 1500)
      return () => clearInterval(interval)
    }, [])

    const [currentIndexSkill, setCurrentIndexSkill] = useState(0);
    const nextSkill = () => {
        setCurrentIndexSkill((prevIndex) => (prevIndex + 1) % selectedTech?.skillsDestacadas.length)
      }
    useEffect(() => {
      const interval = setInterval(nextSkill, 1500)
      return () => clearInterval(interval)
    }, [])

    return (
        <section>
            <div className="modal-skill wow animate__zoomIn" data-wow-duration="1s">
                <div className="close-btn" onClick={() => toClose()}>
                    <span>X</span>
                </div>
                <div className="card-decor-container">
                    <div className="card-decor" />
                </div>
                <h3 style={{color: '#e2e8ef'}}>
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
                        fontSize: '1.1rem',
                        'li': {
                            lineHeight: '2.25rem'
                        },
                        'span': {
                            color: '#e2e8ef',
                            fontSize: '1.1rem'
                        }
                    }}
                >
                    <li>{texts.skillsDesktop.firstExcursion}: <span>{selectedTech?.excursion}</span></li>
                    <li>{texts.skillsDesktop.yearsExperience}: <span>{selectedTech?.totalIncursion}</span></li>
                    <li>{texts.skillsDesktop.firstTech}: <span>{selectedTech?.aterrizaje}</span></li>
                    {
                        selectedTech?.enCurso !== '' &&
                            <li>{texts.skillsDesktop.currentVenture}: <span>{selectedTech?.enCurso}</span></li>
                    }

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.25rem'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                            ● {texts.skillsDesktop.highLightedProjects}: 
                            <div 
                                style={{
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    minWidth: '11.5rem', 
                                    justifyContent: 'center', 
                                    alignItems: 'center',
                                    height: '1rem',
                                    padding: '1.25rem 0',
                                    border: '0.12rem solid rgb(92 107 138)',
                                    borderImage: 'linear-gradient(90deg, #a6c1ff00 5%, #a6c1ff96 45%, #a6c1ff00 95%) 1/1/1 stretch',
                                    borderRight: 'none',
                                    borderLeft: 'none'
                                }}>
                            {selectedTech?.proyectosDestacados.map((project, i) => (
                                <span key={i} className={`projectAnimated ${i === currentIndexProject ? 'visible' : 'hidden'}`}>
                                    {project}
                                </span>
                            ))}
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', '& span': {color: 'rgb(159 179 219)'}}}>
                            ● {texts.skillsDesktop.consumedResources}: 
                            <div 
                                style={{
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    minWidth: '11.5rem', 
                                    justifyContent: 'center', 
                                    alignItems: 'center',
                                    background: 'linear-gradient(rgb(43 62 97 / 76%) 22%, rgb(26 43 79 / 75%) 91%)',
                                    padding: '1.25rem 0',
                                    borderRadius: '0.25rem',
                                }}
                            >
                            {selectedTech?.skillsDestacadas.map((skill, i) => (
                                <span key={i} className={`skillAnimated ${i === currentIndexSkill ? 'visible' : 'hidden'}`}>
                                    {skill}
                                </span>
                            ))}
                            </div>
                        </div>
                    </div>
 

                </List>
            </div>
        </section>
    )
}

export default SkillModal