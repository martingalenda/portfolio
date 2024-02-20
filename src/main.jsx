import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { BrowserRouter as Router} from "react-router-dom"

import App from './App'
import { LangProvider } from "./context/languages.jsx"
import { ThemeConfig } from './config/theme.config.jsx'
import { particlesEffect } from './effects/particles'

import "./styles/imports.scss"

const particlesInit = async (main) => { 
  await loadFull(main)
}

ReactDOM.createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ThemeConfig>
      <>
        <Particles id="tsparticles" init={particlesInit} options={particlesEffect} />
        <LangProvider>
          <Router>
            <App />
          </Router>
        </LangProvider>
      </>
    </ThemeConfig>
  </StrictMode>,
)
