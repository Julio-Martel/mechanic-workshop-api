import { registrarRepuestoModel,
        encontrarRepuestoPorNombre
 } from "../models/repuestos.models.js";

const registrarRepuestoService = async(data) => {
    const repuestoDuplicadoPorNombre = await encontrarRepuestoPorNombre(data.nombre);

    if(repuestoDuplicadoPorNombre){
        throw new Error("Nombre duplicado. Ingrese otro.");
    }

    const registrarRepuesto = await registrarRepuestoModel(data);

    return registrarRepuesto;
}

export {
    registrarRepuestoService
}