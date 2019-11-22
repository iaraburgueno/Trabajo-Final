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
               <a href=detalle-serie.html?idSerie=`+ series[i].id +`><img src=https://image.tmdb.org/t/p/original/`+ series[i].poster_path +` alt=""></a>
             </div>
             <div class="uk-card-body">
                 <h3 class="uk-card-title tituloCarrousel">` + series[i].name + `</h3>
                 <p> Average: `+ series[i].vote_average +`</p>
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

     document.querySelector(".carrousel-mejor-puntaje ul").innerHTML +=
     `<li>
         <div class="uk-card uk-card-default">
             <div class="uk-card-media-top">
                 <a href=detalle-serie.html?idSerie=`+ series[i].id+`><img src='https://image.tmdb.org/t/p/original/`+ series[i].poster_path +`' alt=""></a>
             </div>
             <div class="uk-card-body">
                 <h3 class="uk-card-title tituloCarrousel">` + series[i].name + `</h3>
                 <p> Average: `+ series[i].vote_average +`</p>
             </div>
         </div>

     </li>`
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
              <a href=detalle-serie.html?idSerie=`+ series[i].id+`><img src=https://image.tmdb.org/t/p/original/`+ series[i].poster_path +` alt=""></a>
             </div>
             <div class="uk-card-body">
                 <h3 class="uk-card-title tituloCarrousel">` + series[i].name + `</h3>
                 <p> Average: `+ series[i].vote_average +`</p>
             </div>
         </div>
     </li>
     `

   }

  })

  var buscador = document.getElementById("formu")
  var lobuscado = document.getElementById("busca")

  buscador.onsubmit = function(event){

    if (lobuscado.value.length < 3) {
      event.preventDefault();
      document.querySelector(".error").innerHTML=
      "<div class='alert alert-danger' role='alert'> Please enter at least three characters </div>"

      setTimeout(function (){
          document.querySelector(".alert").style.display = "none"
      },3000)

    }

    else {

    }
  }

}
