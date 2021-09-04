









    buscarEnCatalogo();
    let posicionIndexEncontrada = encontrarSeleccion(buscarEnCatalogo, string);
    debugger;
    let plataformaSeleccionada = informacionPlataforma(baseDatosPrincipal, posicionIndexEncontrada);
    let plataformaSeleccionadaCosto = plataformaCosto(baseDatosPrincipal, posicionIndexEncontrada);

    let objSeleccionUsuario = new crearObjetoCostosPlataforma(plataformaSeleccionada, plataformaSeleccionadaCosto, seleccionUsuarioIndividual)
    seleccionUsuarioCompleta.push(objSeleccionUsuario);
