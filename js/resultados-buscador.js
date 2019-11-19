window.onload = function(){

  var query = new URLSearchParams(location.search);

  var resultadosBuscador = query.get('buscador')

  fetch("https://api.themoviedb.org/3/search/tv?api_key=9901ee414425659325dc091c288e33c9&language=en-US&query="+ resultadosBuscador +"&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    console.log(respuesta);

    var serie = respuesta.results;
    console.log(serie);


    for (var i = 0; i < 10; i++) {
    if(serie[i].poster_path != null){
    document.querySelector(".seriestodas").innerHTML +=
`
<div class="uk-animation-toggle serie-buscador" tabindex="0">
  <a href="detalle-serie.html?idSerie=`+ serie[i].id + `">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-top-small serie-info">
        <div class="serie-imagen">
            <img src=http://image.tmdb.org/t/p/w200` + serie[i].poster_path + `>
        </div>
        <div class="serie-nombre">
            <h5 class="uk-text-center serie-info"> ` + serie[i].name + `</h5>
        </div>
        </div>
</a>
</div>
`

} else {
  document.querySelector(".seriestodas").innerHTML +=
`
<div class="uk-animation-toggle serie-buscador" tabindex="0">
  <a href="detalle-serie.html?idSerie=`+ serie[i].id + `">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-top-small serie-info">
        <div class="serie-imagen">
            <img src="imagenes/notfound.gif">
        </div>
        <div class="serie-nombre">
            <h5 class="uk-text-center tamano-letra"> ` + serie[i].name + `</h5>
        </div>
        </div>
  </a>
</div>

`
}
      }

    })


  .catch(function(error) {
    console.log(error)
  })

document.querySelector(".titulo-buscado").innerHTML += `<h1 class="titulo-buscado"> You search for '`+ resultadosBuscador +`':</h1>`


}
