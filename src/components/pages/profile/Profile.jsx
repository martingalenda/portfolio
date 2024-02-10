
import Hero from "./hero/Hero";
import About from "./about/About"
import SkillsDesktop from './skills/desktop/SkillsDesktop';
/*  import Skills from "./skills/mobile/Skills" */
import Experiences from "./experiences/Experiences"
import Footer from "./footer/Footer"
import NewExperience from "./experiences/NewExp/NewExp";
import { SkillsProvider } from "../../../context/skills";

const Profile = () => {
    
    return(
        <>
            <Hero/>
            <About/>
            <SkillsProvider>
                <SkillsDesktop/>
            </SkillsProvider>
            {/* <Skills/> */}
            {/* <Experiences/> */}
            <NewExperience />
            <Footer />
        </>
    )
}

export default Profile