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


    for (var i = 0; i < serie.length; i++) {
    if(serie[i].poster_path != null){
    document.querySelector(".seriestodas").innerHTML +=
`
<div class="serie-buscador"><div class="serie-imagen">
      <a href="detalle-serie.html?idSerie=`+ serie[i].id + `"><img src=http://image.tmdb.org/t/p/w200` + serie[i].poster_path + `></a><h5>` + serie[i].name + `</h5>
  </div>
  `
} else {
  document.querySelector(".seriestodas").innerHTML +=
`
<div class="serie-buscador"><div class="serie-imagen">
    <a href="detalle-serie.html?idSerie=`+ serie[i].id + `"><img src="imagenes/notfound.gif"></a><h5>` + serie[i].name + `</h5>
</div>
`
}
      }

    })


  .catch(function(error) {
    console.log(error)
  })

document.querySelector(".titulo-buscado").innerHTML += "<h1>Resultado de '"+ resultadosBuscador +"':</h1>"


}
