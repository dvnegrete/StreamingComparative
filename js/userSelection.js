import {idCamelCase} from "./mostrarcatalogo.js";

export function selectionInputs(catalogo){
const userSelection = [];

    for (let i = 0; i < catalogo.length; i++) {
        const idSelection = idCamelCase(catalogo[i]);        
        const inputUser = document.getElementById(`${idSelection}`);
        if (inputUser.checked) {
            userSelection.push(catalogo[i]);
        }
    }    
    return userSelection;
}