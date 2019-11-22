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

}

//informacion Series

  var botonRecomendaciones = document.querySelector("#boton-recomendaciones");
  var carrouselRecomendaciones = document.querySelector ("#carrousel-recomendaciones")
  botonRecomendaciones.onclick = function(){
    carrouselRecomendaciones.classList.toggle("ocultarBoton")
  }


fetch ("https://api.themoviedb.org/3/tv/"+ codigoDeSerie + "/videos?api_key=66f27e806074e1d0e5d2270f17e219a1&language=en-US")
.then(function(res){
  return res.json()
})
.then(function(data){
  let arrayTrailers = data.results
  var divTrailers = document.querySelector('.vertrailer')
  for (var i = 0; i < arrayTrailers.length; i++) {
    var keyTrailer = arrayTrailers[i].key

    divTrailers.innerHTML +=`<a class="uk-button uk-button-default" href="https://www.youtube.com/watch?v=`+keyTrailer+`" data-caption="YouTube">Trailer: `+ (i+1) +`</a>`;

    var botonTrailer = document.querySelector("#boton-trailers");
    var trailers = document.querySelector (".vertrailer")
  botonTrailer.onclick = function(){
    trailers.classList.toggle("ocultarBoton2")

  }
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
      let genero= informacion.genres[0].name;
      let idGen = informacion.genres[0].id;
      let puntaje = informacion.vote_average
      let temporadas = informacion.number_of_seasons
      let episodios = informacion.number_of_episodes

      document.querySelector(".Generos").innerHTML += "<a href='series-por-genero.html?idGenero="+ idGen+"'><p>"+ genero +"</p></a>"
      document.querySelector("h1").innerHTML += name;
      document.querySelector("p.Idioma").innerHTML+= "<span style='text-transform:uppercase'>" + idioma + "</span>";
      document.querySelector("p.Sinopsis").innerHTML+= sinopsis;
      document.querySelector(".poster-serie").innerHTML += "<img src='http://image.tmdb.org/t/p/original" + informacion.poster_path + "'>"
      document.querySelector("p.Estreno").innerHTML += estreno
      document.querySelector("p.Puntaje").innerHTML+= puntaje + "/10"
      document.querySelector("p.Temporadas").innerHTML += temporadas
      document.querySelector("p.Episodios").innerHTML += episodios
//termina informacion series

    })

//empieza series recomendadas
    fetch("https://api.themoviedb.org/3/tv/" + codigoDeSerie + "/recommendations?api_key=66f27e806074e1d0e5d2270f17e219a1&language=en-US&page=1")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      console.log(informacion.results)
      var listadoDeRecomendaciones = document.querySelector("#recomendaciones");
      for(let i = 0; i < informacion.results.length; i++) {
        console.log(informacion.results[i]);
        listadoDeRecomendaciones.innerHTML += `<a href="detalle-serie.html?idSerie=`+informacion.results[i].id+`"><li><div class='uk-panel'><img src='http://image.tmdb.org/t/p/w185`+ informacion.results[i].poster_path + "'><div class='uk-position-center uk-panel'></div></div></li></a>"
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
      document.querySelector("#boton-favoritos").innerHTML = "Favorite"; }
      else {
        seriesFavoritas.push (codigoDeSerie);
      document.querySelector("#boton-favoritos").innerHTML = "Unfavorite";
      console.log("Se agregó a favoritos la serie con el ID " + codigoDeSerie)
      }
      //PASO 3: Escribir en storage
      var infoParaStorage = JSON.stringify (seriesFavoritas);
      localStorage.setItem ("seriesFavoritas", infoParaStorage)

    }



})
}
