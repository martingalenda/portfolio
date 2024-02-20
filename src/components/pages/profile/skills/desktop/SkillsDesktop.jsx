import { Fragment, useContext, useEffect } from 'react';
import WOW from 'wow.js';
import Universe from "./Universe";
import SkillModal from "./SkillModal";
import Modal from "../../../../global/modals/Modal";
import { UNIVERSES } from '../../../../../constants/Universes';
import MenuDeAptitudes from './AptitudesMenu';
import SkillsContext from '../../../../../context/skills';
/* Wow animations */

const SkillsDesktop = () => {

  const { isOpenModalSkill, closeModalTechs, wowActive } = useContext(SkillsContext)

  useEffect(() => {
    const newWOW = () => new WOW({live: false}).init()
    newWOW()
  }, []);

  return(
    <>
      <section className={`skills ${wowActive ? 'wow animate__zoomInDown' : ''}`} data-wow-duration="1.5s">
        <div className="skills__orbit girar-infinitamente"/>
        {
          UNIVERSES.map((universe, i) => {
            return (
              <Fragment key={i}>
                <Universe
                  id={universe.key}
                  title={universe.title} 
                  left={{
                    r4k: universe.left.r4k,
                    fhd: universe.left.fhd
                  }}
                  top={{
                    r4k: universe.top?.r4k,
                    fhd: universe.top?.fhd
                  }}
                /> 
              </Fragment>             
          )})
        }
        <MenuDeAptitudes />
      
      </section>
      <Modal active={isOpenModalSkill} close={closeModalTechs}>
          <SkillModal toClose={closeModalTechs}/>
          <MenuDeAptitudes />
      </Modal> 
    </>
  )
}

export default SkillsDesktop