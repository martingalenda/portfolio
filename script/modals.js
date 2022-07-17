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
    const openProjects = document.querySelectorAll(".project"); // Projecto newline
// **** MB MENU ****
    const menuMb = document.getElementById("menuMb"); // boton apertura
    const mobileOptions = document.querySelector(".mobile__options")
    let closeMM = document.querySelectorAll(".cMM"); // close por botones mobile

// ---------------------------------------------------------------------

// **** Cierre de modal general****

    // Función que aplica los cierres
    const closeModal = function() {
        contactSec.classList.add("disNone");
        projectsSec.classList.add("disNone");
        mobileOptions.classList.add("disNone");
    };

    // Por click en la cruz
    xClose.forEach( (cadaPunto, i )=> {
        xClose[i].addEventListener("click", closeModal)
    })
    // Por click fuera del contenido
    sectionClose.forEach( (cadaPunto, i )=> {
        sectionClose[i].addEventListener("click", closeModal)
    })
    // Por click en la cruz
    closeMM.forEach( (cadaPunto, i )=> {
        closeMM[i].addEventListener("click", closeModal)
    })
    // Por tecla escape (tiene que estar seleccionado un campo de texto)
    contactSec.addEventListener("keyup",function(e){
        if (e.keyCode == 27){
            contactSec.classList.add("disNone"); 
            }
        }
    );

// **** Apertura de modales ****

    // CONTACTO
        const openCont = function() {
            contactSec.classList.remove("disNone");
        };
        openContact.addEventListener("click", openCont);
    // PROJECTS
        const openPrExt = function() {
            projectsSec.classList.remove("disNone");
            // Carousel activado al entrar al modal:
            new Glider(document.querySelector('.carousel__list__project'), {
                slidesToShow: 1,
                slidesToScroll: 1,
                scrollLock: true,
                draggable: true,
                rewind: true,
                arrows: {
                  prev: '.fa-angle-left',
                  next: '.fa-angle-right',
                }
            });
        };
        openProjects.forEach( ( cadaPunto, i ) => {
            openProjects[i].addEventListener("click", openPrExt)
        })
    // MOBILE MENÚ
        const openMenu = function() {
            mobileOptions.classList.remove("disNone");
        };
        menuMb.addEventListener("click", openMenu);
  



