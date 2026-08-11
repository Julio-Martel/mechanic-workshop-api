import { servicioDuplicadoPorDescripcion, 
         crearServicioModel,
         encontrarServicioPorId,
         modificacionSerivicioModel,
         servicioDuplicadoPorNombre,
         eliminarServicioModel,
         listarServiciosModels } from "../models/servicios.models.js";

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

const modificacionSerivicioService = async(id,data) => {
    if(!id){
        throw new Error("FALTA ID");
    }
    
    if(!data || Object.keys(data).length === 0){
        throw new Error("BODY VACIO");
    }

    const servicioExistente = await encontrarServicioPorId(id);

    if(servicioExistente === undefined){
        throw new Error("INEXISTENTE");
    }

    if(data.nombre){
        const nombreDuplicado = await servicioDuplicadoPorNombre(data.nombre);

        if(nombreDuplicado){
            throw new Error("NOMBRE DUPLICADO");
        }
    }

    const modificarServicio = await modificacionSerivicioModel(data,id);

    return modificarServicio;
}

const eliminarServicioService = async(id) => {
    const servicioExistente = await encontrarServicioPorId(id);

    if(!servicioExistente){
        throw new Error("ID INEXISTENTE");
    }

    const servicioEliminado = await eliminarServicioModel(id);

    if(servicioEliminado.affectedRows === 0){
        throw new Error("SIN CAMBIOS");   
    }

    return servicioEliminado;
}

const listarServiciosService = async() => {
    const todosLosServicios = await listarServiciosModels();

    if(todosLosServicios === undefined){
        throw new Error("SIN DATOS");
    }

    return todosLosServicios;
}

export {
    crearServicioService,
    modificacionSerivicioService,
    eliminarServicioService,
    listarServiciosService
}