import { registrarRepuestoModel,
        encontrarRepuestoPorNombre,
        eliminarRepuestoModel,
        actualizarStockModel
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

const actualizarStockService = async(id,cantidad) => {
    
    if(!cantidad || Object.keys(cantidad).length === 0){
        throw new Error("BODY VACIO");
    }

    if(parseInt(cantidad.cantidad) < 0){
        throw new Error("NUMERO NEGATIVO");
    }

    if(isNaN(cantidad.cantidad)){
        throw new Error("NO ES NUMERO");
    }

    const actualizarStock = await actualizarStockModel(id,cantidad.cantidad);


    if(actualizarStock === undefined){
        throw new Error("NO ENCONTRADO");
    }

    if(actualizarStock === 0){
        throw new Error("SIN CAMBIOS");
    }

    return actualizarStock;
}

export {
    registrarRepuestoService,
    eliminarRepuestoService,
    actualizarStockService
}