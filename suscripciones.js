// let contenido = [
//     {nombre : "hbo",  contenido : "Game Of Trones"},
//     {nombre : "hbo",  contenido : "Friends"},
//     {nombre : "blim",  contenido : "Peliculas Mexicanas"},
//     {nombre : "blim",  contenido : "Telenovelas"},
//     {nombre : "disney",  contenido : "Marvel"},
//     {nombre : "disney",  contenido : "Star Wars"},
//     {nombre : "amazonPrime",  contenido : "Jack Ryan"},
//     {nombre : "amazonPrime",  contenido : "James Bond"},
//     {nombre : "apple",  contenido : "Apple Origins"},
//     {nombre : "netflix",  contenido : "Original Netflix"},
//     {nombre : "paramount",  contenido : "Mission Imposible"}
// ];

// let precioSuscripcion = [
//     {nombre :"netflix", costo : 139},
//     {nombre :"amazonPrime" , costo : 99},
//     {nombre: "disney" , costo : 159},
//     {nombre : "hbo" , costo : 149},
//     {nombre : "apple" , costo : 69},
//     {nombre : "blim" , costo : 109},
//     {nombre : "paramount" , costo : 79}
//];

let precioRenta = {
    pelicula : 40,
    renta : 300,
};

let buscarContenido = [
    {nombre : "hbo",  contenido : ["Game Of Trones","Friends"], costo : 149},
    {nombre : "blim",  contenido : ["Peliculas Mexicanas", "Telenovelas"], costo : 109},
    {nombre : "disney",  contenido : ["Marvel","Star Wars"], costo : 159},
    {nombre : "amazonPrime",  contenido : ["Jack Ryan","James Bond"], costo : 99},
    {nombre : "apple",  contenido : ["Apple Origins"], costo : 69},
    {nombre : "netflix",  contenido : ["Original Netflix"], costo : 139},
    {nombre : "paramount",  contenido : ["Mission Imposible"], costo : 79}
];

//let seleccionUsuario = document.querySelectorAll("#seleccion");

let seleccionUsuario = prompt("Ingresa una tipo de contenido: ");

const traerCatalogo = function (plataforma) {
    return plataforma.contenido
}

const seleccionCatalogo = buscarContenido.map(traerCatalogo);

// const encontrarPlataforma = function 

// for (i = 0; i < buscarContenido.length; i++){
//     let plataformaCompleta = buscarContenido[i];
//     trarCatalogo(plataformaCompleta.contenido);
//     console.log(plataformaCompleta)
// }

// function buscaPelicula (contenido) {
//     let plataformaEncontrada;
//     if (contenido === seleccionUsuario) {        
//     }
// }
//catalogo[1]
//la posicion del array corresponde a cada una de las plataformas

const extraerContenido = filtro.map(encontrarSeleccion);

function encontrarSeleccion () {

}
//ejemplo probado en motor V8 del navegador
const traerCatalogo = function (plataforma) {
    return plataforma.contenido
}

const ubicarPlataforma = buscarContenido.map(traerCatalogo);
//apartir de aqui hay que generar un filter con un metodo .some que devuelva TRUE


const ubicarPlataformaExacta = ubicarPlataforma.filter(comprobacionCatalogo);

const comprobacionCatalogo = function (arrayAComprobar){
    let comprobacionIndividual = (arrayAComprobar) => seleccionUsuario === arrayAComprobar;        
}

//aqui trajo catalago por cada posicion.PRIMERO HBO [0]
const catalogoHBO = ubicarPlataforma[0]
undefined

catalogoHBO
(2) ['Game Of Trones', 'Friends']
let catalogoEncontrado;
undefined
catalogoHBO.some(function(contenido){
    return seleccionUsuario === contenido;    
})
//Como la seleción del usuario fue "Friends" entonces devulve TRUE
//por que esta dentro del array
true

//SEGUNDO BLIM [1]
const catalogoBLIM = ubicarPlataforma[1]
undefined

catalogoBLIM.some(function(contenido){
    return seleccionUsuario === contenido;    
})
false
