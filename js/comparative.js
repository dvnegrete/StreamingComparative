const encontrarSeleccion = function(arrayPlataforma, usuario) {
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

const informacionPlataforma = (bd, index) => bd[index].nombre;
const plataformaCosto = (bd, index) => bd[index].costo;

class crearObjetoCostosPlataforma {
    constructor(plataforma, costo, contenido) {
        this.plataforma = plataforma;
        this.costo = costo;
        this.contenido = contenido;
    }
}

function aplanarArray(obj) {
    let array = [];
    for(let i = 0; i < obj.length; i++){
        const plataforma = obj[i].plataforma;
        const costo = obj[i].costo;
        array.push([plataforma,costo]);    
    }
    const matriz = array.flat();
    return matriz;    
}

function eliminarRepeticion (array) {
    let arrayFilter = [];    
    for(let i = 0; i < array.length; i += 2){
        
        if (arrayFilter.includes(array[i])) {            
        } else {
            arrayFilter.push(array[i], array[i+1]);
        }
    }
    return arrayFilter;
}

function objetoCostoUsuario(arrayPlano){
    let array = [];
    for(let i = 0; i < arrayPlano.length; i += 2){
       
        const obj = new crearObjetoCostosPlataforma(arrayPlano[i], arrayPlano[i+1], false);
        array.push(obj);
    }
    return array;
}

const soloPlataformas = (obj) => obj.plataforma;

function sumarSuscripciones(obj) {
    let sumarCostos = 0;
    for (let i = 0; i < obj.length; i++) {
        sumarCostos += obj[i].costo;
    }
    return sumarCostos;
}

//ejecucion:
export function findselection (arraySelection, bd) {
    let seleccionUsuarioCompleta =  [];
    for (let i = 0; i < arraySelection.length; i++) {
        const buscarEnCatalogo =  bd.map((plataforma) => plataforma.contenido);    
        const posicionIndexEncontrada = encontrarSeleccion(buscarEnCatalogo, arraySelection[i]);
        const plataformaSeleccionada = informacionPlataforma(bd, posicionIndexEncontrada);
        const plataformaSeleccionadaCosto = plataformaCosto(bd, posicionIndexEncontrada);    
        const objSeleccionUsuario = new crearObjetoCostosPlataforma(plataformaSeleccionada, plataformaSeleccionadaCosto, arraySelection[i])
        seleccionUsuarioCompleta.push(objSeleccionUsuario);
    }   
    
    const arrayPlataformasContratadas = aplanarArray(seleccionUsuarioCompleta);
    const arrayPlatataformaYcosto = eliminarRepeticion(arrayPlataformasContratadas);    
    const objPlataformaCosto = objetoCostoUsuario(arrayPlatataformaYcosto);    
    const arrayPlataformas = objPlataformaCosto.map(soloPlataformas);    
    const costoTotalSuscripcionUsuario = sumarSuscripciones(objPlataformaCosto);
        
    let objetoResultado = [];
    objetoResultado.push(costoTotalSuscripcionUsuario, arrayPlataformas);
    return objetoResultado;
}