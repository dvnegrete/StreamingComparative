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

//nodo de montaje en HTML
const nodoMontaje = document.getElementById("imprimirCatalogo");
const nodoPlataformas = document.getElementById("plataformasContenidas");
const nodoResultado = document.getElementById("result");


//funcion para mostrar catalogo en API
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

//funcion para mostrar plataformas disponibles para en el sitio
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
    title.textContent = "Plataformas disponibles actualmente en el comparador de este sitio:"
    nodoPlataformas.insertAdjacentElement("beforebegin", title);
}

//funcion para mostrar el comparativo despues de que el usuario seleciono los contenidos que le interesan
export function showResult(array){
  
  let countPreviousResult = nodoResultado.childElementCount;  
  if (countPreviousResult > 1) {
    const nodeListPrevious = nodoResultado.childNodes;   
    for (let i = countPreviousResult; i > 0; i--){
      nodoResultado.removeChild(nodeListPrevious[i-1]);
    }
  }
  
  let container = [];
  
  const labelCost = document.createElement("p");
  labelCost.textContent = `El costo mensual en suscripción para tu selección de contenidos es de: $${array[0].toFixed(2)} MXN`;

  const title = document.createElement("span");
  title.textContent = "Disponible en ";
  
  container.push(labelCost,title);

  const arrayPlataformas = array[1];

  for(let i = 0; i < arrayPlataformas.length; i++) {    
    const spanPlataformas =  document.createElement("span");
    spanPlataformas.textContent = `${arrayPlataformas[i]}, `;
    
    if (arrayPlataformas.length === 1) {
      //cuando solo es una plataforma
      spanPlataformas.textContent = `${arrayPlataformas[i]}`;
    }
    else if (i === arrayPlataformas.length - 2) {
      //cuando restan 2 plataformas dentro del ciclo
      spanPlataformas.textContent = `${arrayPlataformas[i]} `;
    }
    else if (i === arrayPlataformas.length - 1) {
      //cuando restan 2 plataformas dentro del ciclo
      spanPlataformas.textContent = `y ${arrayPlataformas[i]}`;
    }
    container.push(spanPlataformas);
  }
  
  nodoResultado.append(...container);
}