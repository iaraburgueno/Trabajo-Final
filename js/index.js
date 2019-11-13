window.onload = function() {
  fetch("https://api.themoviedb.org/3/tv/popular?api_key=66f27e806074e1d0e5d2270f17e219a1&page=1")
  .then(function(respuesta) {
    return respuesta.json();
  })
  .then(function(informacion) {
    var series = informacion.results;
   console.log(series);

   for (var i = 0; i < 6; i++) {

     document.querySelector(".carrousel-populares ul").innerHTML += `
     <li>
         <div class="uk-card uk-card-default">
             <div class="uk-card-media-top">
                 <img style="height:390px!important; width: auto" src=https://image.tmdb.org/t/p/original/`+ series[i].poster_path +` alt="">
             </div>
             <div class="uk-card-body">
                 <h3 class="uk-card-title tituloCarrousel">` + series[i].name + `</h3>
                 <p>Puntaje: `+ series[i].vote_average +`</p>
             </div>
         </div>
     </li>
     `
   }

  })

  fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=66f27e806074e1d0e5d2270f17e219a1&page=1")
  .then(function(respuesta) {
    return respuesta.json();
  })
  .then(function(informacion) {
    var series = informacion.results;
   console.log(series);

   for (var i = 0; i < 6; i++) {

     document.querySelector(".carrousel-mejor-puntaje ul").innerHTML += `
     <li>
         <div class="uk-card uk-card-default">
             <div class="uk-card-media-top">
                 <img style="height:390px!important; width: auto" src=https://image.tmdb.org/t/p/original/`+ series[i].poster_path +` alt="">
             </div>
             <div class="uk-card-body">
                 <h3 class="uk-card-title tituloCarrousel">` + series[i].name + `</h3>
                 <p>Puntaje: `+ series[i].vote_average +`</p>
             </div>
         </div>
     </li>
     `
   }

  })

  fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=66f27e806074e1d0e5d2270f17e219a1&language=en-US")
  .then(function(respuesta) {
    return respuesta.json();
  })
  .then(function(informacion) {
    var series = informacion.results;
   console.log(series);

   for (var i = 0; i < 6; i++) {

     document.querySelector(".carrousel-al-aire ul").innerHTML += `
     <li>
         <div class="uk-card uk-card-default">
             <div class="uk-card-media-top">
                 <img style="height:390px!important; width: auto" src=https://image.tmdb.org/t/p/original/`+ series[i].poster_path +` alt="">
             </div>
             <div class="uk-card-body">
                 <h3 class="uk-card-title tituloCarrousel">` + series[i].name + `</h3>
                 <p>Puntaje: `+ series[i].vote_average +`</p>
             </div>
         </div>
     </li>
     `
   }

  })
}
