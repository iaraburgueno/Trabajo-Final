window.onload = function() {

  var query = new URLSearchParams(location.search)

  var idGenero = query.get('idGenero')
  // console.log(idGenero);

  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=66f27e806074e1d0e5d2270f17e219a1&language=en-US")
  .then(function(respuesta) {
    return respuesta.json();
  })
  .then(function(data) {
    var generos = data.genres
    console.log(generos);

    for (var i = 0; i < generos.length; i++) {
      if(generos[i].id == idGenero){
        document.querySelector('h1').innerHTML += generos[i].name
      }
    }

 })


  fetch("https://api.themoviedb.org/3/discover/tv?api_key=66f27e806074e1d0e5d2270f17e219a1&with_genres="+idGenero)
  .then(function(respuesta) {
    return respuesta.json();
  })
  .then(function(informacion) {
    var series = informacion.results
   // console.log(series);

   for (var i = 0; i < 10; i++) {

     document.querySelector(".carrousel-generos ul").innerHTML += `
     <a href="detalle-serie.html?idSerie=`+series[i].id+`"><li>
         <div class="uk-panel">
             <img src="https://image.tmdb.org/t/p/original`+ series[i].poster_path +`" alt="">
         </div>
     </li></a>
     `
   }

 })
}
