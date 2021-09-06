import{baseDatosPrincipal} from "./js/datebase.js";
import {catalogoChecklist, availablePlataform, showResult} from "./js/mostrarcatalogo.js";
import {selectionInputs} from "./js/userSelection.js";
import {findselection} from "./js/comparative.js";

const buttonShow = document.getElementById("mostrarCatalogo");
const form = document.getElementById("imprimirCatalogo");
const  buttonComparative = document.getElementById("ejecutarComparativo");
buttonComparative.style = "display: none";
let seleccionUsuario = [];

const traerContenido =  (plataforma) => plataforma.contenido;
const buscarEnCatalogo = () => baseDatosPrincipal.map(traerContenido);
const todasplataformas = (bd) => bd.nombre;
const plataformasDisponibles = baseDatosPrincipal.map(todasplataformas);

//para mostrar en HTML. COMPLETAR CATALOGO sirve?
//const completarCatalogo = (element) => catalogoCompleto.push(element);
const generarCatalogoCompleto = function () { 
    const aplanarArray = buscarEnCatalogo();    
    return aplanarArray.reduce(()=> aplanarArray.flat()        
    );
}
const catalogoCompleto = generarCatalogoCompleto();


function accionButton () {
    catalogoChecklist(catalogoCompleto);
    availablePlataform(plataformasDisponibles);
    buttonShow.style = "display: none";
    buttonComparative.style = "display: auto";
}
buttonShow.addEventListener("click", accionButton);

function selectionListen (){
    seleccionUsuario = selectionInputs(catalogoCompleto);
}

form.addEventListener("click", selectionListen);

//inicia comparativo
function startComparative(){
    const costoPlataformas = findselection(seleccionUsuario, baseDatosPrincipal);    
    showResult(costoPlataformas);
}

buttonComparative.addEventListener("click", startComparative);