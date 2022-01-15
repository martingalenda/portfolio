// PARTICLES.JS

particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 28,
                "density": {
                    "enable": true,
                    "value_area": 2051.7838682439087
                }
            },
            "color": {
                "value": "#a2ceff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.9627601227913727,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 4,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 335.6643356643357,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 179.8201798201798,
                    "size": 0,
                    "duration": 1.838161838161838,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 135.86413586413587,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

// FULLPAGE.js

new fullpage('#fullpage', {
    //  {──────────────────────────────────────────────────::::::Opciones Basicas──────────────────────────────────────────────────
    autoScrolling: true, // Se activa el scroll.
    scrollBar: true,
    fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
    fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
    easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
    scrollingSpeed: 700, // Velocidad del scroll. Valores: en milisegundos.
    css3: true, // Si usara CSS3 o javascript.
    easingcss3: 'ease-out', // Curva de velocidad del efecto.
    loopBottom: false, // Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima sección y el ususario siga scrolleando.
    //  ──────────────────────────────────────────────────::::::Barra de navegación──────────────────────────────────────────────────
    navigation: false, // Muesta la barra de navegación.
    menu: '#menu', // Menu de navegación.
    anchors: ['home', 'aboutme', 'skills', 'projects', 'footer'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
    responsiveWidth: 767,
});


// J QUERY - SLIDER

// Skills

$(document).ready(function() {

    var skillslist = {
        padre: $('#skillslist'),
        numeroSlides: $('#skillslist').children('.skill-contain').length,
        posicion: 1,
    }

    skillslist.padre.children('.skill-contain').first().css({
        'left': 0
    });

    // Arrow next

    $('#arrow-next').on('click', function(e) {
        e.preventDefault();

        if (skillslist.posicion < skillslist.numeroSlides) {
            // Nos aseguramos de que las demas slides empiecen desde la derecha
            skillslist.padre.children().not('.active').css({
                'left': '100%'
            });

            // Quitamos la clase active y se la ponemos al siguiente elemento. Y lo animamos.
            $('#skillslist .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });

            // Animamos el slide anterior para que se deslize hacia la izquierda.
            $('#skillslist .active').prev().animate({
                'left': '-100%'
            });

            skillslist.posicion = skillslist.posicion + 1;

        } else {
            // Hacemos que el slide activo (es decir el último), se anime hacia la derecha
            $('#skillslist .active').animate({
                'left': '-100%'
            });

            //Seleccionamos todos los slides que no tengan la clase .active, y los posicionamos a la derecha
            skillslist.padre.children().not('.active').css({
                'left': '100%'
            });

            // Eliminamos la clase active y se la ponemos al primer elemento. Luego lo animamos.
            $('#skillslist .active').removeClass('active');
            skillslist.padre.children('.skill-contain').first().addClass('active').animate({
                'left': '0'
            });

            //Reseteamos la posicion a 1
            skillslist.posicion = 1;
        }

    });


    // Arrow prev

    $('#arrow-prev').on('click', function(e) {
        e.preventDefault();

        if (skillslist.posicion > 1) {

            skillslist.padre.children().not('.active').css({
                'left': '-100%'
            });

            $('#skillslist .active').animate({
                'left': '100%'
            });

            $('#skillslist .active').removeClass('active').prev().addClass('active').animate({
                'left': 0
            });

            skillslist.posicion = skillslist.posicion - 1;

        } else {
            skillslist.padre.children().not('active').css({
                'left': '-100%'
            });

            $('#skillslist .active').animate({
                'left': '-100%'
            });

            $('#skillslist .active').removeClass('active');
            skillslist.padre.children().last().addClass('active').animate({
                'left': 0
            });

            skillslist.posicion = skillslist.numeroSlides;
        }
    });
});



// MOBILE MENU

console.log(document.querySelector('.menu-options-mobile'));

const menum = document.querySelector('.menu-options-mobile');
const burger = document.querySelector('.burgerbutton');

burger.addEventListener('click', hideShow);

$(".mbnbut").click(function() {
    hideShow()
})

function hideShow() {
    if (menum.classList.contains('is-active')) {
        menum.classList.remove('is-active');
    } else {
        menum.classList.add('is-active');
    }
}

// PROYECTOS