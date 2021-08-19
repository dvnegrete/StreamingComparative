let precioRenta = {
    pelicula : 40,
    renta : 300,
};

let baseDatosPrincipal = [
    {nombre : "Hbo Max",  contenido : ["Game Of Trones","Friends"], costo : 149},
    {nombre : "Blim",  contenido : ["Peliculas Mexicanas", "Telenovelas"], costo : 109},
    {nombre : "Disney",  contenido : ["Marvel","Star Wars"], costo : 159},
    {nombre : "Amazon Prime",  contenido : ["Jack Ryan","James Bond"], costo : 99},
    {nombre : "Apple +",  contenido : ["Apple Origins"], costo : 69},
    {nombre : "Netflix",  contenido : ["Original Netflix"], costo : 139},
    {nombre : "Paramount",  contenido : ["Mission Imposible"], costo : 79}
];

//funcion para mostrar todo el contenido en HTML
function changeText()
{
    for(let i = 0 ; i < baseDatosPrincipal.length ; i++)
    {
        let mostrarContenidoHTML = baseDatosPrincipal[i].contenido;
        let inner = document.getElementById("catalogoEnBD").innerHTML;
        let newBox = ('<input type="checkbox" name="item[]" value="' + mostrarContenidoHTML[i] + '>');
        document.getElementById("catalogoEnBD").innerHTML = inner + newBox;
    }
document.getElementById("formCatalogoEnBD").submit();
}

//let seleccionUsuario = document.querySelectorAll("#seleccion");
let seleccionUsuarioCompleta =  [];

function crearObjetoCostosPlataforma (plataforma, costo, contenido) {
    this.contenido =contenido;
    this.plataforma = plataforma;
    this.costo = costo;
}

const encontrarSeleccion = function( arrayPlataforma, usuario) {
    //array para guardar los booleans de cada iteraccion y encontrar la posicion de plataforma buscada
    let arrayDeComprobacion = [];
    for (let i = 0; i < arrayPlataforma.length; i++) {        
        let arrayTemporal = arrayPlataforma[i].some(function(contenido){
            return usuario === contenido;
        })            
        arrayDeComprobacion.push(arrayTemporal);
    }
    //del array de booleans, traer posicion con valor true.
    return arrayDeComprobacion.indexOf(true)
}

const traerCatalogo =  (plataforma) => plataforma.contenido;
const informacionPlataforma = (bd, index) => bd[index].nombre;
const plataformaCosto = (bd, index) => bd[index].costo;

//Manipulacion HTML
//conexion con HTML
//changeText();

//ejecucion:
let totalcontenido = 4;
for (i = 0; i  < totalcontenido; i++)    {
    let seleccionUsuarioIndividual = prompt("Ingresa una tipo de contenido: ");

    let buscarEnCatalogo = baseDatosPrincipal.map(traerCatalogo);

    let posicionIndexEncontrada = encontrarSeleccion(buscarEnCatalogo, seleccionUsuarioIndividual);
    
    let plataformaSeleccionada = informacionPlataforma(baseDatosPrincipal, posicionIndexEncontrada);
    let plataformaSeleccionadaCosto = plataformaCosto(baseDatosPrincipal, posicionIndexEncontrada);

    let objSeleccionUsuario = new crearObjetoCostosPlataforma(plataformaSeleccionada, plataformaSeleccionadaCosto, seleccionUsuarioIndividual)
    seleccionUsuarioCompleta.push(objSeleccionUsuario);
    

    console.log("En suscripcion pagarias mensualmente: $" + seleccionUsuarioCompleta[0].costo + 
" como parte de la plataforma " + seleccionUsuarioCompleta[0].plataforma.toUpperCase() )
}
console.log(seleccionUsuarioCompleta)
//comparar. en la 