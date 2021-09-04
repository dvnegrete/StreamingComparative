function quitarEspacios (arrayWithLether) {    
    const arrayNoSpaces = [];
    for(let i = 0; i < arrayWithLether.length; i++) {
      //convertir siguiente letra al espacio detectado en Mayus  
      if (arrayWithLether[i] === " ") {            
          let j = i + 1;
          let nextLetter = arrayWithLether[j];
          let mayus = nextLetter.toUpperCase();            
          arrayWithLether[j] = mayus;
        } else {
          arrayNoSpaces.push(arrayWithLether[i]);
        }
    }
    return arrayNoSpaces;
}

export function idCamelCase (string) {
  const stringCompleto = Array.from(string);  
  //arrayString contiene el nombre de la pelicula en un array por cada letra
  const arrayCamel = quitarEspacios(stringCompleto);
  const stringCamel = arrayCamel.join("");    
  return stringCamel;
}

const nodoMontaje = document.getElementById("imprimirCatalogo");
const nodoPlataformas = document.getElementById("plataformasContenidas");

export function catalogoChecklist (catalogoCompleto)
{   let containerHTML = [];
    
    for(let i = 0 ; i < catalogoCompleto.length ; i++)
    {   
        //crear y asignar label
        const labelCheckbox = document.createElement("label");
        //crear ID?   labelCheckbox.htmlFor = `#${catalogoCompleto[i]}`;
        labelCheckbox.textContent =  catalogoCompleto[i];
        labelCheckbox.className = "catalogo-checkbox"

        const inputCheckbox =document.createElement("input");
        inputCheckbox.type = "checkbox";
        inputCheckbox.name = `${catalogoCompleto[i]}`;             
        let idCamel = idCamelCase(catalogoCompleto[i]);
        inputCheckbox.id = idCamel;
        
        containerHTML.push(inputCheckbox, labelCheckbox);
    }
    nodoMontaje.append(...containerHTML);
}


export function availablePlataform(arrayPlataform){
    
    const containerPlataform = [];
    const plataformAvailable = arrayPlataform.length - 1;

    for(let i = 0 ; i < plataformAvailable ; i++){
        const liPlataform = document.createElement("li");        
        liPlataform.textContent = arrayPlataform[i];
        liPlataform.className = "plataformasDisponibles";

        containerPlataform.push(liPlataform);
    }
    nodoPlataformas.append(...containerPlataform);

    const title = document.createElement("h3");
    title.textContent = "Plataformas disponibles en el comparativo de este sitio"
    nodoPlataformas.insertAdjacentElement("beforebegin", title);
}