const kDramas = [
    {
        nombre: "True Beauty",
        genero: "romance"
    },
    {
        nombre: "Propuesta Laboral",
        genero: "comedia"
    },
    {
        nombre: "Hotel de Luna",
        genero: "fantasia"
    }
]

const formulario = document.querySelector("form");
const botonFav = document.querySelectorAll(".btn-favorito");
const favoritos = document.querySelector("#favoritos");
const btnRecomendar = document.querySelector("#btn-recomendar");

btnRecomendar.addEventListener("click", function() {
    document.querySelector("#recomendaciones").scrollIntoView();
});

formulario.addEventListener("submit",function(event) {
    event.preventDefault();
    const generoSeleccionado = document.querySelector("#genero").value;
    const recomendacion = kDramas.find(function(drama) {
      
        return drama.genero === generoSeleccionado;
        
    });

    const resultado = document.querySelector("#resultado");
    if(recomendacion){
        resultado.textContent ="Te recomiendo: "+ recomendacion.nombre;
       } else {
        resultado.textContent = "No encontramos una recomendación."
       };
});

botonFav.forEach(function(boton) {
  boton.addEventListener("click", function() {

    const articulo = boton.parentElement;
    const nombre = articulo.querySelector("h3").textContent;
    const favExistentes = favoritos.querySelectorAll("p");
    const existe = Array.from(favExistentes).some(function(favorito){
        return favorito.textContent === nombre;
    });

    if(!existe){
        const favorito = document.createElement("p");
        favorito.classList.add("favorito");
        favorito.textContent = nombre;
        favoritos.appendChild(favorito);
        boton.textContent = "✓ Agregado a favoritos";
    }
    
  })  
})


