import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { theme } from "../../../../../config/theme.config";
import SkillsContext from "../../../../../context/skills";

const Universe = ({title, left, top, id}) => {

    const { openModalTechs } = useContext(SkillsContext)
    return (
        <Box
            onClick={() => openModalTechs(id)}
            sx={{
               position: 'absolute',
               cursor: 'pointer',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               fontStyle: 'italic',
               textAlign: 'center',
               gap: '1.5rem',
               color: '#94a3b8',
               '& p': {
                   fontSize: '0.8rem'
               },
               '&:hover .universe': {
                   background: 'radial-gradient(50% 50% at 50% 50%, rgb(64 96 255 / 89%) 0%, rgb(11 16 48))',
                   border: '1px solid #000000'
               },
               '&:hover p': {
                   color: '#4c8eff',
               },
               '&:hover .universe::after': {
                   border: '1px solid #4c8eff'
               },
               '&:hover .universe::before': {
                   border: '1px solid #4c8eff'
               },
               [theme.breakpoints.up('xl')]: {
                   left: left?.fhd,
                   top: top?.fhd,
               },
               [theme.breakpoints.up('xxxxl')]: {
                   left: left?.r4k,
                   top: top?.r4k,
               },

            }}
        >
          <Box className="universe"/>
          <Typography className="universe__title">{title}</Typography>
         </Box>
    )
}

export default Universe