import{baseDatosPrincipal} from "./js/datebase.js";
import {catalogoChecklist, availablePlataform, showResult} from "./js/mostrarcatalogo.js";
import {selectionInputs} from "./js/userSelection.js";
import {findselection} from "./js/comparative.js";

const buttonShow = document.getElementById("mostrarCatalogo");
const form = document.getElementById("imprimirCatalogo");

let seleccionUsuario = [];

const traerContenido =  (plataforma) => plataforma.contenido;
const buscarEnCatalogo = () => baseDatosPrincipal.map(traerContenido);
const todasplataformas = (bd) => bd.nombre;
const plataformasDisponibles = baseDatosPrincipal.map(todasplataformas);

//para mostrar en HTML. COMPLETAR CATALOGO sirve?

const generarCatalogoCompleto = function () { 
    const aplanarArray = buscarEnCatalogo();    
    return aplanarArray.reduce(()=> aplanarArray.flat()        
    );
}
const catalogoCompleto = generarCatalogoCompleto();

function accionButton () {
    if (form.childElementCount === 0) {
        //crear catalago y mostrar
        catalogoChecklist(catalogoCompleto);
        availablePlataform(plataformasDisponibles);
        buttonShow.textContent = "COMPARAR";        
    } else {
        //existe el catalogo, ejecutamos comparador
        const seleccionUsuario = selectionInputs(catalogoCompleto);
        const costoPlataformas = findselection(seleccionUsuario, baseDatosPrincipal);    
        showResult(costoPlataformas);  
    }
}
buttonShow.addEventListener("click", accionButton);


