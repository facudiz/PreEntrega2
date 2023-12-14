function mostrarJuegos(juegos){
    juegos.forEach(item => {

        console.log(item.titulo + " - " + "$" +item.precio);
        
    });
}

//mostrarJuegos(juegos);
let anioBusqueda;
let precioBusqueda;
let plataformaBusqueda;
let generoBusqueda;



let datoDeBusqueda = Number(prompt("Ingrese por el dato para filtrar el listado de juegos 1- Año 2- Plataforma 3- Genero 4- Precio 5- Salir"));
switch(datoDeBusqueda)
{
    case 1: anioBusqueda = Number(prompt("Ingrese el año de salida del juego:"));
        break;
    case 2: plataformaBusqueda = prompt("Ingrese la Plataforma del juego:");
        break;
    case 3: generoBusqueda = prompt("Ingrese el genero del juego");
        break;
    case 4: precioBusqueda = Number(prompt("Ingrese un precio Maximo"));
        break;
}


function buscarPorAnio(juego){
 if (anioBusqueda) {
        return juego.anio === anioBusqueda;
      } else {
        return juego;
      }
}

function buscarPorPlataforma(juego){
    if (plataformaBusqueda) {
           return juego.plataforma === plataformaBusqueda;
         } else {
           return juego;
         }
   }
function buscarPorGenero(juego){
    if (generoBusqueda) {
           return juego.genero === generoBusqueda;
         } else {
           return juego;
         }
   }
function buscarPorPrecio(juego){
    if (precioBusqueda) {
           return juego.precio <= precioBusqueda;
         } else {
           return juego;
         }
   }

function filtrarJuegos()
{
    let resultado;
    switch(datoDeBusqueda)
    {
        case 1: resultado =  juegos.filter(buscarPorAnio);
            break;
        case 2:resultado = juegos.filter(buscarPorPlataforma);
            break;
        case 3: resultado = juegos.filter(buscarPorGenero);
            break;
        case 4: resultado = juegos.filter(buscarPorPrecio);
          break;
    }
    if (resultado.length > 0) {
        mostrarJuegos(resultado);
      } else {
        alert("No se encontraron juegos con esas caracteristicas");
      }
}

filtrarJuegos();