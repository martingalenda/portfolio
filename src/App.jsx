import { Routes, Route } from "react-router-dom"

import Hero from "./components/pages/profile/hero/Hero"
import About from "./components/pages/profile/about/About"
import { SkillsProvider } from "./context/skills"
import SkillsDesktop from "./components/pages/profile/skills/desktop/SkillsDesktop"
import NewExperience from "./components/pages/profile/experiences/NewExp/NewExp"
import Sent from "./components/global/modals/contact/sent/Sent"
import Error404 from './components/pages/error404/Error404'
import Nav from "./components/global/nav/Nav"
import Socials from "./components/global/socials/Socials"

const App = () => {

  return (
    <>
      <Nav/>
        {/* <NavMobile/> */}
      <Socials/>
      <Routes basename="/portfolio">
        <Route path="/portfolio" element={<Hero/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<SkillsProvider><SkillsDesktop/></SkillsProvider>}/>
        <Route path="/experience" element={<NewExperience/>}/>
        <Route path="/sent" element={<Sent/>}/>
        <Route path="*" element={<Error404/>}/> 
      </Routes>
    </>
  )
}

export default App