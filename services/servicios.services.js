import { servicioDuplicadoPorDescripcion, 
         crearServicioModel } from "../models/servicios.models";

const crearServicioService = async(data) => {
    if(!data || Object.keys(data).length === 0){
        throw new Error("BODY VACIO");
    }

    if(!data.nombre || !data.descripcion || !data.precio){
        throw new Error("DATOS INCOMPLETOS");
    }

    const servicioDuplicado = await servicioDuplicadoPorDescripcion(data.descripcion);

    if(servicioDuplicado){
        throw new Error("SERVICIO DUPLICADO");
    }

    const crearServicio = await crearServicioModel(data);    

    return crearServicio;
}

export {
    crearServicioService
}