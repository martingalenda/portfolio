import {useState} from 'react';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import {useNavigate} from 'react-router-dom'

const actions = [
  { icon: <FontAwesomeIcon icon={faBehance}/>, name: 'Behance', href: 'https://www.behance.net/martingalenda' },
  { icon: <GitHubIcon />, name: 'GitHub', href: 'https://github.com/martingalenda' },
  { icon: <TelegramIcon />, name: 'Telegram', href: 'https://t.me/martingalenda' },
  { icon: <LinkedInIcon />, name: 'Linked in', href: 'https://www.linkedin.com/in/martingalenda' },
  { icon: <MailOutlineIcon />, name: 'E-mail', href: 'mailto:martinarielgalenda@gmail.com' },
];    


const Socials = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <SpeedDial
              ariaLabel="Social Media"
              sx={{ position: 'fixed',
                    bottom: '3em', 
                    right: '3em', 
                    '@media (max-width: 639px)': {
                       display: 'none', // Muestra el SpeedDial en resoluciones mayores o iguales a 640px
                     }
            ,}}
              icon={<AlternateEmailIcon sx={{color: '#e2e8ef', fontSize: '1.2em'}} />}
              onClose={handleClose}
              onOpen={handleOpen}
              open={open}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={() => {
                    window.open(action.href, '_blank', 'noopener,noreferrer');
                    handleClose()
                  }}
                />
              ))}
            </SpeedDial>
        </>
    )
}

export default Socials