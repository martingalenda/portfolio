import { useContext } from 'react';
import Chip from '@mui/material/Chip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import LangContext from '../../../../../context/languages'

const SkillsM = () => {

    const { texts  } = useContext(LangContext)

    return (
        <section className="mobile_section">
            <h2>{texts.nav.skills}</h2>
            <div style={{ marginTop: '2rem', paddingBottom: '4rem' }}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Project Management <small>[ +10 {texts.skillsDetails.years} ]</small>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.75rem'}}>
                        {
                            texts.skillsDetails.management.skillsDestacadas.map(
                                (skill) => <Chip label={skill} variant="outlined" />
                            )
                        }  
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    Front-end Development <small>[ +4 {texts.skillsDetails.years} ]</small>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.75rem'}}>
                          {
                              texts.skillsDetails.frontEnd.skillsDestacadas.map(
                                  (skill) => <Chip label={skill} variant="outlined" />
                              )
                          }  
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    Design - Multimedia <small>[ 3 {texts.skillsDetails.years} ]</small>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.75rem'}}>
                        {
                            texts.skillsDetails.design.skillsDestacadas.map(
                                (skill) => <Chip label={skill} variant="outlined" />
                            )
                        }  
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                  >
                    Back-end Development <small>[ 1 {texts.skillsDetails.years.slice(0, -1)} ]</small>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.75rem'}}>
                        {
                            texts.skillsDetails.backEnd.skillsDestacadas.map(
                                (skill) => <Chip label={skill} variant="outlined" />
                            )
                        }  
                    </div>
                  </AccordionDetails>
                </Accordion>
            </div>
        </section>
    )
}

export default SkillsM