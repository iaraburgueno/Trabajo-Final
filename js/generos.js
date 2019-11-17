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
          document.querySelector(".aventuraA").href += generos[i].id
          break;
        case "Mystery":
          document.querySelector(".misterio").style.display = "block";
          document.querySelector(".misterioO").href += generos[i].id
          break;
        case "Animation":
          document.querySelector(".animacion").style.display = "block";
          document.querySelector(".animacionN").href += generos[i].id
          break;
        case "Comedy":
          document.querySelector(".comedia").style.display = "block";
          document.querySelector(".comediaA").href += generos[i].id
          break;
        case "Crime":
          document.querySelector(".crimen").style.display = "block";
          document.querySelector(".crimenN").href += generos[i].id
          break;
        case "Documentary":
          document.querySelector(".documental").style.display = "block";
          document.querySelector(".documentalL").href += generos[i].id
          break;
        case "Drama":
          document.querySelector(".drama").style.display = "block";
          document.querySelector(".dramaA").href += generos[i].id
          break;
        case "Family":
          document.querySelector(".familiares").style.display = "block";
          document.querySelector(".familiaresS").href += generos[i].id
          break;
        case "Soap":
          document.querySelector(".romance").style.display = "block";
          document.querySelector(".romanceE").href += generos[i].id
        break;
        case "Sci-Fi & Fantasy":
          document.querySelector(".ciencia-ficcion").style.display = "block";
          document.querySelector(".ciencia-ficcionN").href += generos[i].id
          break;
        case "Western":
          document.querySelector(".occidentales").style.display = "block";
          document.querySelector(".occidentalesS").href += generos[i].id
          break;
        case "War & Politics":
          document.querySelector(".guerra").style.display = "block";
          document.querySelector(".guerraA").href += generos[i].id
          break;





        default:

      }
    }
  })
}
