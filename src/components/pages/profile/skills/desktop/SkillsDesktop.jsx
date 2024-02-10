import { Fragment, useContext, useEffect } from 'react';
import Universe from "./Universe";
import SkillModal from "./SkillModal";
import Modal from "../../../../global/modals/Modal";
import { UNIVERSES } from '../../../../../constants/Universes';
import MenuDeAptitudes from './AptitudesMenu';
import SkillsContext from '../../../../../context/skills';
/* Wow animations */
import WOW from 'wow.js';

const SkillsDesktop = () => {

  const { isOpenModalSkill, closeModalTechs } = useContext(SkillsContext)

  useEffect(() => {
    const newWOW = () => {new WOW({live: true}).init();}
    newWOW()
}, []);

  return(
    <section className="section skillsSec">
      <div className="skillsSec__orbit girar-infinitamente"/>
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
    
      <Modal active={isOpenModalSkill} close={closeModalTechs}>
          <SkillModal />
          <MenuDeAptitudes />
      </Modal> 
    </section>
  )
}

export default SkillsDesktop