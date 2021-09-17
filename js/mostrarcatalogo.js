//nodo de montaje en HTML
const nodoMontaje = document.getElementById("imprimirCatalogo");
const nodoPlataformas = document.getElementById("plataformasContenidas");
const nodoResultado = document.getElementById("result");
const allInputs = nodoMontaje.childNodes;

//funciones que usa idCamelCase
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

//funcion que usa mostrar Plataformas y funcion selectionInputs
export function idCamelCase (string) {
  const stringCompleto = Array.from(string);  
  //arrayString contiene el nombre de la pelicula en un array por cada letra
  const arrayCamel = quitarEspacios(stringCompleto);
  const stringCamel = arrayCamel.join("");    
  return stringCamel;
}

//funcion para mostrar catalogo en API
export function catalogoChecklist (catalogoCompleto) {

  //boton para seleccionar todo
  const buttonSelectAll = document.createElement("button");
  buttonSelectAll.type = "button";
  buttonSelectAll.id = "selectAllInputs";
  buttonSelectAll.className = "catalogo--button";
  buttonSelectAll.textContent = "Selecionar todo";
  buttonSelectAll.addEventListener("click", function (event) {
    for(let i = 0; i < allInputs.length; i++) {      
      const onlyInputs = allInputs[i].childNodes;
      onlyInputs[1].checked = 1;
    }
    event.stopPropagation();
  });  
  //boton para quitar selección
  const buttonCleanSelect = document.createElement("button");
  buttonCleanSelect.type = "button";
  buttonCleanSelect.className = "catalogo--button";
  buttonCleanSelect.id = "cleanSelectInput";
  buttonCleanSelect.textContent = "Quitar Selección";
  buttonCleanSelect.addEventListener("click", function (event) {
    for(let i = 0; i < allInputs.length; i++) {
      const onlyInputs = allInputs[i].childNodes;
      onlyInputs[1].checked = 0;
    }
    event.stopPropagation();
  });

  const divButtons = document.createElement("div");
  divButtons.className = "catalogo--BotonesControl";

  divButtons.append(buttonSelectAll, buttonCleanSelect);
  
  //mostrar catalogo
  let containerHTML = [];

    for(let i = 0 ; i < catalogoCompleto.length ; i++)
    { //crear checkbox del contenido disponible en BD
      const labelCheckbox = document.createElement("label");      
      labelCheckbox.textContent =  catalogoCompleto[i];
      labelCheckbox.className = "catalogo--form--label";

      const inputCheckbox = document.createElement("input");
      inputCheckbox.type = "checkbox";
      inputCheckbox.name = `${catalogoCompleto[i]}`;
      inputCheckbox.className = "form--checkbox";
      let idCamel = idCamelCase(catalogoCompleto[i]);
      inputCheckbox.id = idCamel;

      labelCheckbox.append(inputCheckbox);
      containerHTML.push(labelCheckbox);
    }   
    
    nodoMontaje.append(...containerHTML);
    nodoMontaje.insertAdjacentElement("afterend", divButtons);
}

//mostrar plataformas disponibles para en el sitio
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
    title.textContent = "Plataformas disponibles en este comparador: "
    nodoPlataformas.insertAdjacentElement("beforebegin", title);
}


//resultado la selección de contenidos del usuario
export function showResult(array){
  
  //para consultas previas
  let countPreviousResult = nodoResultado.childElementCount;  
  if (countPreviousResult > 1) {
    const nodeListPrevious = nodoResultado.childNodes;   
    for (let i = countPreviousResult; i > 0; i--){
      nodoResultado.removeChild(nodeListPrevious[i-1]);
    }
  }
  
  let container = [];
  
  const labelCostSpan = document.createElement("span");
  labelCostSpan.textContent = `La suscripción mensual para tu selección te costaria: `;

  const costo = document.createElement("span");
  costo.textContent = `$${array[0].toFixed(2)} MXN`
  costo.className = "resultMostrar--destacar";

  const lineBreak = document.createElement("br");
  const lineBreak2 = document.createElement("br");

  const title = document.createElement("span");
  title.textContent = "Encuentralo en ";
  
  container.push(labelCostSpan, costo, lineBreak, lineBreak2, title);

  const arrayPlataformas = array[1];

  for(let i = 0; i < arrayPlataformas.length; i++) {    
    const spanPlataformas =  document.createElement("span");
    spanPlataformas.className = "resultMostrar--destacar";
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
  nodoResultado.className = "resultMostrar";
}