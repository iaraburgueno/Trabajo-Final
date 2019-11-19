window.onload = function() {

  var seriesFavoritas;
  var recuperoStorage = localStorage.getItem("seriesFavoritas")
  if (recuperoStorage == null){
    seriesFavoritas = [];
  } else {
    seriesFavoritas = JSON.parse(recuperoStorage);
  }

  for (var i=0; i< seriesFavoritas.length; i++) {
    fetch("https://api.themoviedb.org/3/tv/" + seriesFavoritas[i] + "?api_key=66f27e806074e1d0e5d2270f17e219a1&language=en-US")
      .then(function(respuesta) {
        return respuesta.json();
      })
      .then(function(informacion) {
        console.log(informacion);
      })

      let name = informacion.name;

      document.querySelector("h1").innerHTML += name;
      document.querySelector(".poster-serie").innerHTML += "<img src='http://image.tmdb.org/t/p/original" + informacion.poster_path + "'>"
  }
}
