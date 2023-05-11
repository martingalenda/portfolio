import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

/* Imports sass */
import "./styles/imports.scss"

/* Components */
import Nav from "./components/global/nav/Nav"
import NavMobile from "./components/global/nav/NavMobile"
import Socials from "./components/global/socials/Socials"

/* Context */
import { LangProvider } from "./context/languages.jsx";
import { ThemeConfig } from './config/theme.config.jsx';

/* Efecto de particulas */
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {particlesEffect} from './effects/particles'
const particlesInit = async (main) => { 
  await loadFull(main)
}

/* Rutas */
  import { BrowserRouter as Router} from "react-router-dom";

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
        </LangProvider>
      </Router>
    </ThemeConfig>
  </React.StrictMode>,
)
