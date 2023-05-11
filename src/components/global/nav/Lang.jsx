import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext } from 'react';
import LangContext from '../../../context/languages';
import en from './img/en.png'
import es from './img/es.png'

const Lang = ({close, state, open}) => {

    const {  handleLanguageEN, handleLanguageES } = useContext(LangContext);

    return (
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={state}
            open={open}
            onClose={close}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
        >
            <MenuItem onClick={() => {close(), handleLanguageES()}}>ES <img style={{width: '1.3em', marginLeft: '0.5em'}} src={es} alt="Español"/></MenuItem>
            <MenuItem onClick={() => {close(), handleLanguageEN()}}>EN <img style={{width: '1.3em', marginLeft: '0.5em'}} src={en} alt="English"/></MenuItem>
        </Menu>
    )
}

export default Lang