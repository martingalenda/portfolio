import { createContext, useContext, useState } from "react";

import { useModals } from "../hooks/useModals";
import LangContext from "./languages";

const SkillsContext = createContext() 

const SkillsProvider = ({children}) => {

    const { texts } = useContext(LangContext)
    const [isOpenModalSkill, openModalSkill, closeModalSkill] = useModals(false)
    const [selectedTech, setSelectedTech] = useState(texts.skillsDetails.frontEnd);

    const openModalTechs = (tech) => {
        setSelectedTech(texts.skillsDetails[tech])
        openModalSkill()
    }
    const closeModalTechs = () => {
        closeModalSkill()
    }

    const data = {isOpenModalSkill, openModalTechs, closeModalTechs, selectedTech}

    return(
        <SkillsContext.Provider value={data}>
            {children}
        </SkillsContext.Provider>
    )
}

export { SkillsProvider }
export default SkillsContext