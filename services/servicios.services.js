import { servicioDuplicadoPorDescripcion, 
         crearServicioModel,
         encontrarServicioPorId,
         modificacionSerivicioModel } from "../models/servicios.models.js";

const crearServicioService = async(data) => {
    if(!data || Object.keys(data).length === 0){
        throw new Error("BODY VACIO");
    }

    if(!data.nombre || !data.descripcion || !data.precio){
        throw new Error("DATOS INCOMPLETOS");
    }

    const servicioDuplicado = await servicioDuplicadoPorDescripcion(data.nombre);

    if(servicioDuplicado){
        throw new Error("SERVICIO DUPLICADO");
    }

    const crearServicio = await crearServicioModel(data);    

    return crearServicio;
}

/*
    ARREGLAR ESTO, EL ERROR INDICA QUE EL OBJETO NO ES ITERABLE


*/


export {
    crearServicioService
}