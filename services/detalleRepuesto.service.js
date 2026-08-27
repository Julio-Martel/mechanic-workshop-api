import { consultarOrdenModel } from "../models/ordenes.models.js"
import { encontrarRepuestoPorId, descontarStockRepuesto } from "../models/repuestos.models.js";
import { crearDetalleRepuestoModel } from "../models/detalleRepuesto.models.js";

const crearDetalleRepuestoService = async(data) => {
    if(!data || Object.keys(data).length === 0){
        throw new Error("BODY VACIO");
    }

    if(!data.id_orden || !data.id_repuesto || !data.cantidad){
        throw new Error("FALTAN DATOS");
    }

    const verificarOrden = await consultarOrdenModel(data.id_orden);

    if(!verificarOrden){
        throw new Error("ID INEXISTENTE ORDEN");
    }

    const verificarRepuesto = await encontrarRepuestoPorId(data.id_repuesto);

    if(!verificarRepuesto){
        throw new Error("ID INEXISTENTE REPUESTO");
    }

    const cantidadEnStock = verificarRepuesto[0].stock;

    if(cantidadEnStock < data.cantidad){
        throw new Error("STOCK INSUFICIENTE");
    }

    await descontarStockRepuesto(data.id_repuesto,data.cantidad);

    const crearDetalleRepuesto = await crearDetalleRepuestoModel(data);

    return crearDetalleRepuesto;
}   


export {
    crearDetalleRepuestoService
}