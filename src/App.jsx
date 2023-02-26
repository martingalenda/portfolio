/* Components */
  import Hero from "./components/hero/Hero"
  import Sent from "./components/contact/sent/Sent"
  import Error404 from './components/error404/Error404'

/* Scroll fullpage */
  import ReactFullpage from "@fullpage/react-fullpage"
  const anchors = ['homeSec', 'aboutSec', 'skillsSec', 'projectsSec', 'footerSec'];

/* Rutas */
  import { Routes, Route } from "react-router-dom";

const App = () => (

  <ReactFullpage
    anchors={anchors}
    navigationTooltips={anchors}
    navigat
    fitToSection= {false} // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
    fitToSectionDelay= {1} // Delay antes de acomodar la seccion automaticamente.
    easing= 'easeInOutCubic' // Funcion de tiempos de la animacion.
    scrollingSpeed= {700} // Velocidad del scroll. Valores: en milisegundos.
    licenseKey= 'gplv3-license'
    onLeave={() => {}}
    render={() => {

      return(
        <>
          <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="/profile" element={<Hero/>}/>
            <Route path="/sent" element={<Sent/>}/>
            <Route path="*" element={<Error404/>}/>
          </Routes>
        </>
      );
    }}
  />
);

export default App