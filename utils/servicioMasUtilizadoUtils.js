const servicioMasUtilizado = (todosDetallesServicios) => {
    let mayorCantidad = 0;
    let servicioMayor = null;

    for(let i = 0; i < todosDetallesServicios.length; i++){

        let acum2 = 0;
        let valorActual = i + 1;

        for(let j = 0; j < todosDetallesServicios.length; j++){

            if(todosDetallesServicios[j].id_servicio === valorActual){
                acum2++;
            }
        }

        if(acum2 > mayorCantidad){
            mayorCantidad = acum2;
            servicioMayor = valorActual;
        }
    }

    const data = {
        id_servicio: servicioMayor,
        mayorCantidad: mayorCantidad
    }

    return data;
}

export {
  servicioMasUtilizado
}