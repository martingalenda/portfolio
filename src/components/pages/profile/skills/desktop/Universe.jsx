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
                   background: 'radial-gradient(50% 50% at 50% 50%, rgb(226 232 239) 0%, rgb(105 146 206 / 56%) 100%)',
                   boxShadow: '0px 0px 1.5rem #8db7ff',
                   border: '0.05rem solid rgb(178 181 188 / 13%)'
               },
               '&:hover p': {
                   color: '#8bace1',
               },
               '&:hover .universe::after': {
                   border: '1px solid #ff000000'
               },
               '&:hover .universe::before': {
                   border: '1px solid #ff000000'
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