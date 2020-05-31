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
     anchors: ['home', 'aboutme', 'skills', 'footer'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
 });

 // Mobile Menu

 console.log(document.querySelector('.menu-options-mobile'));

 const menum = document.querySelector('.menu-options-mobile');
 console.log(menum);
 const burger = document.querySelector('.burgerbutton');
 console.log(burger);

 burger.addEventListener('click', hideShow);

 function hideShow() {
     if (menum.classList.contains('is-active')) {
         menum.classList.remove('is-active');
     } else {
         menum.classList.add('is-active');
     }
 }