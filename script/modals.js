// **** VARIABLES GENERAL ****
    const xClose = document.querySelectorAll(".xClose"); // Boton (x) cierre de modal
    let sectionClose = document.querySelectorAll(".container__close"); // Cierre por click
// **** VARIABLES CONTACT ****
    let contactSec = document.querySelector(".contact"); // sección completa
    const openContact = document.getElementById("openContact"); // acceso boton menu

    const formProyect = document.getElementById("formProyect"); // Formulario nombre de proyecto
    const formAuthor = document.getElementById("formAuthor"); // Formulario autor del mensaje
    const formResume = document.getElementById("formResume"); // Formulario descripción del mensaje
    let formSubmit = document.getElementById("formSubmit"); // Formulario boton envío de datos
// **** VARIABLES PROJECTS ****
    let projectsSec = document.querySelector(".projectsExt"); // sección completa
    const openProjects = document.getElementById("newline"); // Projecto newline
// **** MB MENU ****
    const menuMb = document.getElementById("menuMb"); // boton apertura
    const mobileOptions = document.querySelector(".mobile__options")
    let closeMM = document.querySelectorAll(".cMM"); // close por botones mobile


// ---------------------------------------------------------------------


// **** Cierre de modal general****
    // Por click sobre el fondo
    const closeModal = function() {
        contactSec.classList.add("disNone");
        projectsSec.classList.add("disNone");
        mobileOptions.classList.add("disNone");
    };
    xClose[0].addEventListener("click", closeModal);
    xClose[1].addEventListener("click", closeModal);
    xClose[2].addEventListener("click", closeModal);
    sectionClose[0].addEventListener("click", closeModal);
    sectionClose[1].addEventListener("click", closeModal);
    sectionClose[2].addEventListener("click", closeModal);
    closeMM[0].addEventListener("click", closeModal);
    closeMM[1].addEventListener("click", closeModal);
    closeMM[2].addEventListener("click", closeModal);

    // Por tecla escape (tiene que estar seleccionado un campo de texto)
    contactSec.addEventListener("keyup",function(e){
        if (e.keyCode == 27){
            contactSec.classList.add("disNone"); 
            }
        }
    );

// **** Apertura de modales ****
    // CONTACTO - Desde el menu
        const openCont = function() {
            contactSec.classList.remove("disNone");
        };
        openContact.addEventListener("click", openCont);
    // PROJECTS - Desde el line time
        const openPrExt = function() {
            projectsSec.classList.remove("disNone");
        };
        openProjects.addEventListener("click", openPrExt);
    // MOBILE MENÚ
        const openMenu = function() {
            mobileOptions.classList.remove("disNone");
        };
        menuMb.addEventListener("click", openMenu);



        



// **** Contacto - Envío de email automatico ****
// Validación
/* const formValidate = () => {
        formSubmit.addEventListener("click", (e) => {
            e.preventDefault();
            alert(hola)
            }
        );
    } */


/* formSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    alert("hola")
    }
);
 */
