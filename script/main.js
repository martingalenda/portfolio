// !! PARTICLES.JS

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
                        "opacity": 0
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

// !! FULLPAGE.js

new fullpage('#fullpage', {
    //  {──────────────────────────────────────────────────::::::Opciones Basicas──────────────────────────────────────────────────
    autoScrolling: true, // Se activa el scroll.
    scrollBar: false,
    fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
    fitToSectionDelay: 1, // Delay antes de acomodar la seccion automaticamente.
    easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
    scrollingSpeed: 700, // Velocidad del scroll. Valores: en milisegundos.
    css3: true, // Si usara CSS3 o javascript.
    easingcss3: 'ease-out', // Curva de velocidad del efecto.
    loopBottom: false, // Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima sección y el ususario siga scrolleando.
    //  ──────────────────────────────────────────────────::::::Barra de navegación──────────────────────────────────────────────────
    navigation: false, // Muesta la barra de navegación.
    menu: '#menu', // Menu de navegación.
    anchors: ['homeSec', 'aboutmeSec', 'skillsSec', 'projectsSec', 'footerSec'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
    responsiveWidth: 767,
});

// !! CAROUSEL SKILLS

addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__list__skills'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: true,
        draggable: true,
        rewind: true,
        arrows: {
          prev: '.angle-prev',
          next: '.angle-next',
        }
    });
});