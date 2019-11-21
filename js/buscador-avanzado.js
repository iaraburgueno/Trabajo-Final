window.onload = function(){

  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=9901ee414425659325dc091c288e33c9&language=en-US")
  .then(function(response) {
    return response.json();
  })

  .then(function(respuesta) {
    console.log(respuesta.genres);
    var genero = respuesta.genres;

    var generos = document.querySelector(".selectGenres");
    var withoutGenre = document.querySelector(".selectWithoutGenres");
    console.log(generos);

    for (var i = 0; i < genero.length; i++) {
      generos.innerHTML +=
      `
      <option value='`+genero[i].id+`'> `+genero[i].name+` </option>
      `
      withoutGenre.innerHTML +=
      `
      <option value='`+genero[i].id+`'> `+genero[i].name+` </option>
      `
    }

    var selectFecha = document.querySelector('.selectYear')

    for (var i = 1900; i <= 2019; i++) {
      selectFecha.innerHTML +=
      `
      <option value='`+i+`'> `+i+` </option>
      `
    }
  })

  document.querySelector('.ba').onsubmit = function(e) {
    e.preventDefault();

    var campoOrden = document.querySelector("select[name='selectOrder']");
    var ordenDelUsuario = campoOrden.options[campoOrden.selectedIndex].value;
    console.log(ordenDelUsuario)

    var campoOrden1 = document.querySelector("select[name='selectOrder1']")
    var ordenDelUsuario1 = campoOrden1.options[campoOrden1.selectedIndex].value;

    var campoOrden2 = document.querySelector("select[name='selectOrder2']")
    var ordenDelUsuario2 = campoOrden2.options[campoOrden2.selectedIndex].value;

    var campoOrden3 = document.querySelector("select[name='selectOrder3']")
    var ordenDelUsuario3 = campoOrden3.options[campoOrden3.selectedIndex].value;
    console.log("1 "+ordenDelUsuario1, "2 " +ordenDelUsuario2, "3 "+ordenDelUsuario3);

    if (ordenDelUsuario == "" && ordenDelUsuario1 == "" && ordenDelUsuario2 == "" && ordenDelUsuario3 =="" ) {
      console.log('entro en el [primero]');
      document.querySelector(".error").innerHTML=
      "<div class='alert alert-danger' role='alert'> Please select one option </div>"
      setTimeout(function (){
          document.querySelector(".alert").style.display = "none"
      },3000)
    }

    else if (ordenDelUsuario1 !== "" && ordenDelUsuario2 !== "" && ordenDelUsuario1 == ordenDelUsuario2) {
      console.log('entro en el [segundo]');
      document.querySelector(".error").innerHTML=
      "<div class='alert alert-danger' role='alert'> You cannot select and exclude the same genre </div>"

      setTimeout(function (){
          document.querySelector(".alert").style.display = "none"
      },3000)

    }else {



    fetch("https://api.themoviedb.org/3/discover/tv?api_key=9901ee414425659325dc091c288e33c9&language=en-US&sort_by=" + ordenDelUsuario + "&first_air_date_year="+ ordenDelUsuario3 + "&page=1&timezone=America%2FNew_York&with_genres="+ ordenDelUsuario1 + "&without_genres="+ ordenDelUsuario2 + "&include_null_first_air_dates=false")
    .then(function(response) {
      return response.json();
    })
    .then(function(respuesta) {
      console.log(respuesta);

      document.querySelector(".seriestodas").innerHTML = ""

      var serie = respuesta.results;
      console.log(serie);


      for (var i = 0; i < serie.length; i++) {
        if(serie[i].poster_path != null){
          document.querySelector(".seriestodas").innerHTML +=
          `
          <div class="uk-animation-toggle serie-buscador" tabindex="0">
            <a href="detalle-serie.html?idSerie=`+ serie[i].id + `">
              <div class="uk-card uk-card-default uk-card-body uk-animation-slide-top-small serie-info">
                <div class="serie-imagen">
                  <img src=http://image.tmdb.org/t/p/w200` + serie[i].poster_path + `>
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
                  <img src="imagenes/notfound.png">
                </div>
              </div>
            </a>
          </div>
          `
        }
      }
      document.querySelector(".seriestodas").style.display = "flex";

      document.querySelector("#miScroll").click()



    })
  }

  }
}
