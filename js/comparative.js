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
        this.contenido = contenido;
        this.plataforma = plataforma;
        this.costo = costo;
    }
}

function eliminarRepeticion(valor, posicion, array) {
    return posicion === array.indexOf(valor);
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
    let indexPlataformasUsuario = [];  
    for (let i = 0; i < arraySelection.length; i++) {
        const buscarEnCatalogo =  bd.map((plataforma) => plataforma.contenido);    
        const posicionIndexEncontrada = encontrarSeleccion(buscarEnCatalogo, arraySelection[i]);
        indexPlataformasUsuario.push(posicionIndexEncontrada);
        const plataformaSeleccionada = informacionPlataforma(bd, posicionIndexEncontrada);
        const plataformaSeleccionadaCosto = plataformaCosto(bd, posicionIndexEncontrada);    
        
        const objSeleccionUsuario = new crearObjetoCostosPlataforma(plataformaSeleccionada, plataformaSeleccionadaCosto, arraySelection[i])
        seleccionUsuarioCompleta.push(objSeleccionUsuario);
    }   
    
    //no esta funcionado eliminar repeticion
    const objPlataformasContratadas = seleccionUsuarioCompleta.filter(eliminarRepeticion);
    const indexClean = indexPlataformasUsuario.filter(eliminarRepeticion);
    debugger;
    console.log(indexClean);
    const arrayPlataformas = objPlataformasContratadas.map(soloPlataformas);
    //const arrayPlataformaReducido = arrayPlataformas.map(algo);
    const costoTotalSuscripcionUsuario = sumarSuscripciones(objPlataformasContratadas);
    
    console.log("En suscripcion pagarias mensualmente: $" + costoTotalSuscripcionUsuario);
    console.log(arrayPlataformas);
    return costoTotalSuscripcionUsuario;
}