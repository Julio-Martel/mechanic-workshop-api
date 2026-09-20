const servicioMasUtilizado = async(todasdLasOrdenes) => {
    let acum1 = 0;
    for(let i = i + 1; i < todasdLasOrdenes.lenght; i++){
        let acum2 = 0;
        for(let j = 0; j < todasdLasOrdenes.lenght; j++){
            if(todasdLasOrdenes[j].id_servicio === i){
                acum2 = acum2 + 1;
            }
        }

        if(acum2 > acum1){
            acum1 = acum2;
        }
    }

   return acum1; 
}

export {
  servicioMasUtilizado
}