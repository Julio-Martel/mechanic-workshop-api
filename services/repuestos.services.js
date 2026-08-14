import { registrarRepuestoModel,
        encontrarRepuestoPorNombre,
        eliminarRepuestoModel
 } from "../models/repuestos.models.js";

const registrarRepuestoService = async(data) => {
    const repuestoDuplicadoPorNombre = await encontrarRepuestoPorNombre(data.nombre);

    if(repuestoDuplicadoPorNombre){
        throw new Error("NOMBRE DUPLICADO");
    }

    const registrarRepuesto = await registrarRepuestoModel(data);

    return registrarRepuesto;
}

const eliminarRepuestoService = async(id) => {
    const eliminarRepuesto = await eliminarRepuestoModel(id);

    if(eliminarRepuesto === 0){
        throw new Error("SIN CAMBIOS");
    }

    return eliminarRepuesto;
}


export {
    registrarRepuestoService,
    eliminarRepuestoService
}