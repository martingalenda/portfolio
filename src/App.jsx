/* Components */
  import Profile from "./components/pages/profile/Profile"
  import Sent from "./components/global/modals/contact/sent/Sent"
  import Error404 from './components/pages/error404/Error404'

/* Scroll fullpage */
  import ReactFullpage from "@fullpage/react-fullpage"

/* React */
import {useEffect, useState} from 'react'

/* Rutas */
  import { Routes, Route } from "react-router-dom";

const App = () => {

  const [isFullpageInitialized, setIsFullpageInitialized] = useState(false);
  const anchors = ['homeSec', 'aboutSec', 'skillsSec',  'projectsSec', 'footerSec'];

  useEffect(() => {
    if (!isFullpageInitialized & window.innerWidth >= 768)  {
      setIsFullpageInitialized(true);
    } 
  }, [isFullpageInitialized]);

  return (
    <>
      {isFullpageInitialized ?
        <ReactFullpage
          anchors={anchors}
          navigationTooltips={anchors}
          navigat
          fitToSection= {false} // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
          fitToSectionDelay= {1} // Delay antes de acomodar la seccion automaticamente.
          easing= 'easeInOutCubic' // Funcion de tiempo de la animacion.
          scrollingSpeed= {700} // Velocidad del scroll. Valores: en milisegundos.
          licenseKey= 'gplv3-license'
          onLeave={() => {}}
          render={() => {

            return(
              <>
                <Routes basename="/portfolio">
                  <Route path="/portfolio/" element={<Profile/>}/>
                  <Route path="/portfolio/profile" element={<Profile/>}/>
                  <Route path="/portfolio/sent" element={<Sent/>}/>
                  <Route path="/portfolio/*" element={<Error404/>}/>
                  <Route path="*" element={<Error404/>}/>
                </Routes>
              </>
            );
          }}
        />
        :
        <>
                <Routes basename="/portfolio">
                  <Route path="/portfolio/" element={<Profile/>}/>
                  <Route path="/portfolio/profile" element={<Profile/>}/>
                  <Route path="/portfolio/sent" element={<Sent/>}/>
                  <Route path="/portfolio/*" element={<Error404/>}/>
                  <Route path="*" element={<Error404/>}/>
                </Routes>
        </>
      }
    </>
  )
}

export default App