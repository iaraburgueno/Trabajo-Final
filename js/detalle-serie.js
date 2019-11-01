window.onload = function() {
  var botonRecomendaciones = document.querySelector("#boton-recomendaciones");
  var carrouselRecomendaciones = document.querySelector ("#carrousel-recomendaciones")
  botonRecomendaciones.onclick = function(){
    carrouselRecomendaciones.classList.toggle("ocultarBoton")

  }

  var codigoDeSerie = new URLSearchParams(location.search).get('numeroDeSerie')

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

    })
}
