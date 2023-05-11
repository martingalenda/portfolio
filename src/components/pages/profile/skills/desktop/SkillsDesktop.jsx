import BallCanvas from "./Techs";
import { technologies } from "../../../../../data/techs";

/* Context */
import { useContext} from 'react';
import LangContext from '../../../../../context/languages';

const SkillsDesktop = () => {

const { texts  } = useContext(LangContext);

return(
    <section className="section skillsDesktopSec">

        <div className="skillsDesktopSec__orbit girar-infinitamente"/>

{/*         <div style={{height: '100vh'}}>
          {
            technologies.map((technology) => (
              <div style={{width: '7em', height: '7em', position: 'relative', top: technology.top, right: technology.right}} key={technology.name}>
                  <BallCanvas icon={technology.icon} name={technology.name} />
              </div>
            ))
          }
        </div> */}

    </section>
)
}

export default SkillsDesktop