import { servicioDuplicadoPorDescripcion, 
         crearServicioModel } from "../models/servicios.models.js";

const crearServicioService = async(data) => {
    if(!data || Object.keys(data).length === 0){
        throw new Error("BODY VACIO");
    }

    if(!data.nombre || !data.descripcion || !data.precio){
        throw new Error("DATOS INCOMPLETOS");
    }

    let descrip = data.descripcion;
    let minus = descripcion.toLowerCase();

    const servicioDuplicado = await servicioDuplicadoPorDescripcion(minus);

    if(servicioDuplicado){
        throw new Error("SERVICIO DUPLICADO");
    }

    const crearServicio = await crearServicioModel(data);    

    return crearServicio;
}

export {
    crearServicioService
}