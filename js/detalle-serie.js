window.onload = function() {
  console.log(document.querySelector("#boton-favoritos"));
//CLASE STORAGE
var seriesFavoritas;
var recuperoStorage = localStorage.getItem("seriesFavoritas")
// si todavia no tengo series favoritas
if (recuperoStorage == null){
  //creo una lista vacia
  seriesFavoritas = [];
} else {
  // descomprimo el texto (con JSONparse )que tenia en storage en el array que necesito trabajar
  seriesFavoritas = JSON.parse(recuperoStorage);
//TERMINA EL PASO 1
}



var codigoDeSerie = new URLSearchParams(location.search).get('idSerie')

if (seriesFavoritas.includes(codigoDeSerie)) {
  document.querySelector("#boton-favoritos").innerHTML = "Quitar de favoritos"

} //QUE PONGO ACA?))
//Cambiar el Boton

//termina clase Storage





//informacion Series

  var botonRecomendaciones = document.querySelector("#boton-recomendaciones");
  var carrouselRecomendaciones = document.querySelector ("#carrousel-recomendaciones")
  botonRecomendaciones.onclick = function(){
    carrouselRecomendaciones.classList.toggle("ocultarBoton")
  }



  fetch("https://api.themoviedb.org/3/tv/" + codigoDeSerie + "?api_key=66f27e806074e1d0e5d2270f17e219a1&language=en-US")
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(informacion) {
      console.log(informacion);
      let name = informacion.name;
      let sinopsis = informacion.overview;
      let idioma = informacion.languages[0];
      let estreno= informacion.first_air_date;


      document.querySelector("h1").innerHTML += name;
      document.querySelector("p.Idioma").innerHTML+= "<span style='text-transform:uppercase'>" + idioma + "</span>";
      document.querySelector("p.Sinopsis").innerHTML+= sinopsis;
      document.querySelector(".poster-serie").innerHTML += "<img src='http://image.tmdb.org/t/p/original" + informacion.poster_path + "'>"
      document.querySelector("p.Estreno").innerHTML += estreno
//agregar backdrop path

    })
    //termina informacion series
    //empieza series recomendadas
    fetch("https://api.themoviedb.org/3/tv/" + codigoDeSerie + "/recommendations?api_key=66f27e806074e1d0e5d2270f17e219a1&language=en-US&page=1")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      console.log(informacion.results)
      var listadoDeRecomendaciones = document.querySelector("#recomendaciones");
      for(let i = 0; i < informacion.results.length; i++) {
        console.log(informacion.results[i].id);
        listadoDeRecomendaciones.innerHTML += "<li><div class='uk-panel'><img src='http://image.tmdb.org/t/p/w185"+ informacion.results[i].poster_path + "'><div class='uk-position-center uk-panel'></div></div></li>"

      }
    })





    //termina series recomendadas




    // CLASE STORAGE
    document.querySelector("#boton-favoritos").onclick = function() {

      console.log(1);
    //PASO 2: Modificar la informacion
    if (seriesFavoritas.includes(codigoDeSerie)){
      console.log(codigoDeSerie);
      var index = seriesFavoritas.indexOf(codigoDeSerie);
      seriesFavoritas.splice(index, 1);
      document.querySelector("#boton-favoritos").innerHTML = "Agregar a Favoritos"; }
      else {
        seriesFavoritas.push (codigoDeSerie);
        document.querySelector("#boton-favoritos").innerHTML = "Quitar de Favoritos";
        console.log("Se agregó a favoritos la serie con el ID " + codigoDeSerie)
      }
      //PASO 3: Escribir en storage
      var infoParaStorage = JSON.stringify (seriesFavoritas);
      localStorage.setItem ("seriesFavoritas", infoParaStorage)

    }




;(function(window) {

	'use strict';

	var support = { transitions: Modernizr.csstransitions },
		// transition end event name
		transEndEventNames = { 'WebkitTransition': 'webkitTransitionEnd', 'MozTransition': 'transitionend', 'OTransition': 'oTransitionEnd', 'msTransition': 'MSTransitionEnd', 'transition': 'transitionend' },
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		onEndTransition = function( el, callback ) {
			var onEndCallbackFn = function( ev ) {
				if( support.transitions ) {
					if( ev.target != this ) return;
					this.removeEventListener( transEndEventName, onEndCallbackFn );
				}
				if( callback && typeof callback === 'function' ) { callback.call(this); }
			};
			if( support.transitions ) {
				el.addEventListener( transEndEventName, onEndCallbackFn );
			}
			else {
				onEndCallbackFn();
			}
		},
		// the pages wrapper

		// menu button
		menuCtrl = document.querySelector('button.menu-button'),
		// the navigation wrapper
		nav = document.querySelector('.pages-nav'),
		// the menu nav items
		navItems = [].slice.call(nav.querySelectorAll('.link--page')),
		// check if menu is open
		isMenuOpen = false;

	function init() {

		initEvents();
	}



	// event binding
	function initEvents() {
		// menu button click
		menuCtrl.addEventListener('click', toggleMenu);

		// navigation menu clicks
		navItems.forEach(function(item) {
			// which page to open?
			var pageid = item.getAttribute('href').slice(1);
			item.addEventListener('click', function(ev) {
				ev.preventDefault();
				openPage(pageid);
			});
		});

		// clicking on a page when the menu is open triggers the menu to close again and open the clicked page


		// keyboard navigation events
		document.addEventListener( 'keydown', function( ev ) {
			if( !isMenuOpen ) return;
			var keyCode = ev.keyCode || ev.which;
			if( keyCode === 27 ) {
				closeMenu();
			}
		} );
	}

	// toggle menu fn
	function toggleMenu() {
		if( isMenuOpen ) {
			closeMenu();
		}
		else {
			openMenu();
			isMenuOpen = true;
		}
	}

	// opens the menu
	function openMenu() {
		// toggle the menu button
		classie.add(menuCtrl, 'menu-button--open')
		// stack gets the class "pages-stack--open" to add the transitions

		// reveal the menu
		classie.add(nav, 'pages-nav--open');
    document.querySelector("nav").style.position = "relative";

		// now set the page transforms

	}

	// closes the menu
	function closeMenu() {
		// same as opening the current page again
		openPage();
	}

	// opens a page
	function openPage() {

    document.querySelector("nav").style.position = "absolute";
		// close menu..
		classie.remove(menuCtrl, 'menu-button--open');
		classie.remove(nav, 'pages-nav--open');

			isMenuOpen = false;

	}

	// gets the current stack pages indexes. If any of them is the excludePage then this one is not part of the returned array


	init();

})(window);
}
