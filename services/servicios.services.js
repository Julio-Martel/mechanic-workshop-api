import { servicioDuplicadoPorDescripcion, 
         crearServicioModel } from "../models/servicios.models";

const crearServicioService = async(data) => {
    if(!data || Object.keys(data).length === 0){
        throw new Error("BODY VACIO");
    }

    if(!data.nombre || !data.descripcion || !data.precio){
        throw new Error("DATOS INCOMPLETOS");
    }



}

export {
    crearServicioService
}