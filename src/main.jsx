import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

/* Imports sass */
import "./styles/imports.scss"

/* Components */
import Nav from "./components/nav/Nav"

/* Context */
import { LangProvider } from "./context/languages.jsx";

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
    <Router>
      <Particles id="tsparticles" init={particlesInit} options={particlesEffect} />
      <LangProvider>
        <Nav/>
        <App />
      </LangProvider>
    </Router>
  </React.StrictMode>,
)
