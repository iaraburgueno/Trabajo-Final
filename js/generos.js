window.onload = function() {
  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=66f27e806074e1d0e5d2270f17e219a1&language=en-US")
  .then(function(respuesta) {
    return respuesta.json();
  })
  .then(function(generos) {
    generos = generos.genres
    for (var i = 0; i < generos.length; i++) {
      console.log(generos[i]);
      switch (generos[i].name) {
        case "Action & Adventure":
          document.querySelector(".aventura").style.display = "block";
          document.querySelector(".aventura a").href += generos[i].id
          break;
        case "Mystery":
          document.querySelector(".misterio").style.display = "block";
          document.querySelector(".misterio a").href += generos[i].id
          break;
        case "Animation":
          document.querySelector(".animacion").style.display = "block";
          document.querySelector(".animacion a").href += generos[i].id
          break;
        case "Comedy":
          document.querySelector(".comedia").style.display = "block";
          document.querySelector(".comedia a").href += generos[i].id
          break;
        case "Crime":
          document.querySelector(".crimen").style.display = "block";
          document.querySelector(".crimen a").href += generos[i].id
          break;
        case "Documentary":
          document.querySelector(".documental").style.display = "block";
          document.querySelector(".documental a").href += generos[i].id
          break;
        case "Drama":
          document.querySelector(".drama").style.display = "block";
          document.querySelector(".drama a").href += generos[i].id
          break;
        case "Family":
          document.querySelector(".familiares").style.display = "block";
          document.querySelector(".familiares a").href += generos[i].id
          break;
        case "Soap":
          document.querySelector(".romance").style.display = "block";
          document.querySelector(".romance a").href += generos[i].id
        break;
        case "Sci-Fi & Fantasy":
          document.querySelector(".ciencia-ficcion").style.display = "block";
          document.querySelector(".ciencia-ficcion a").href += generos[i].id
          break;
        case "Western":
          document.querySelector(".occidentales").style.display = "block";
          document.querySelector(".occidentales a").href += generos[i].id
          break;
        case "War & Politics":
          document.querySelector(".guerra").style.display = "block";
          document.querySelector(".guerra a").href += generos[i].id
          break;





        default:

      }
    }
  })
}
