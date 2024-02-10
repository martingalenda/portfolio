import { Box, List, ListItem, Typography } from '@mui/material'
import { useContext } from 'react'
import { UNIVERSES } from '../../../../../constants/Universes'
import LangContext from '../../../../../context/languages'
import SkillsContext from '../../../../../context/skills'

const MenuDeAptitudes = () => {

  const { texts } = useContext(LangContext)
  const { openModalTechs } = useContext(SkillsContext)
    return (
        <Box sx={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            borderRadius: '0.75em',
            padding: '1.5rem',
            background: 'rgba(7, 11, 34, 0.17)',
            zIndex: '1000'
        }}>
            <Typography sx={{maxWidth: 'max-content', pl: '1rem'}} component="h2" className="title__section">
               {texts.skillsDesktop.mainTitle}
            </Typography>
            <List sx={{
              color: '#94a3b8',
              marginTop: '20px',
              '& li': {
                gap: '10px',
                cursor: 'pointer',
                '&:hover': {
                  transition: 'color 1s',
                  color: '#4c8eff'
                }
              }
            }}>
              {
                UNIVERSES.map((universe, i) => {
                  return (                
                    <ListItem key={universe.key} onClick={() => openModalTechs(universe.key)}>
                      ⦿ <strong> {texts.skillsDesktop.profs[i]} </strong>
                    </ListItem>
                  )

                })
              }
            </List> 
        </Box>
    )
}

export default MenuDeAptitudes