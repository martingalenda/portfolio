import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./styles/imports.scss"
import Nav from "./components/global/nav/Nav"
import NavMobile from "./components/global/nav/NavMobile"
import Socials from "./components/global/socials/Socials"
import { LangProvider } from "./context/languages.jsx";
import { ThemeConfig } from './config/theme.config.jsx';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesEffect } from './effects/particles'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Box from '@mui/material/Box';
import { BrowserRouter as Router} from "react-router-dom";

const particlesInit = async (main) => { 
  await loadFull(main)
}


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ThemeConfig>
      <Router>
        <Particles id="tsparticles" init={particlesInit} options={particlesEffect} />
        <LangProvider>
          <Nav/>
          <Socials/>
          <NavMobile/>
          <App />
          <Box sx={{position: 'fixed', bottom: '4em', right: '0', left: '0', display: 'flex', justifyContent: 'center', zIndex: '-1'}}>
              <KeyboardDoubleArrowDownIcon sx={{fontSize: '2em', color: '#94a3b8'}} className="next-sec"/>
          </Box>
        </LangProvider>
      </Router>
    </ThemeConfig>
  </React.StrictMode>,
)
