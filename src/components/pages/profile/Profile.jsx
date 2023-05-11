/* Components */
    import Hero from "./hero/Hero";
    import About from "./about/About"
   /*  import SectionWrapper from './skills/desktop/SkillsDesktop'; */
    import Skills from "./skills/mobile/Skills"
    import Experiences from "./experiences/Experiences"
    import Footer from "./footer/Footer"

const Profile = () => {
    
    return(
        <>
            <Hero/>
            <About/>
           {/*  <SectionWrapper/> */}
            <Skills/>
            <Experiences/>
            <Footer/>
        </>
    )
}

export default Profile