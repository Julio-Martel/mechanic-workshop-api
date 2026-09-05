import { consultarOrdenModel } from "../models/ordenes.models.js"
import { encontrarRepuestoPorId, descontarStockRepuesto } from "../models/repuestos.models.js";
import { crearDetalleRepuestoModel } from "../models/detalleRepuesto.models.js";
import db from '../config/db.js'

const crearDetalleRepuestoService = async(data) => {
    if(!data || Object.keys(data).length === 0){
        throw new Error("BODY VACIO");
    }

    if(!data.id_orden || !data.id_repuesto || !data.cantidad){
        throw new Error("FALTAN DATOS");
    }

    const conexion = await db.getConnection();

    try {
        await conexion.beginTransaction();

        const verificarOrden = await consultarOrdenModel(conexion, data.id_orden);

        if(!verificarOrden){
            throw new Error("ID INEXISTENTE ORDEN");
        }

        const verificarRepuesto = await encontrarRepuestoPorId(conexion,data.id_repuesto);

        if(!verificarRepuesto){
            throw new Error("ID INEXISTENTE REPUESTO");
        }

        const cantidadEnStock = verificarRepuesto.stock;

        if(cantidadEnStock < data.cantidad){
            throw new Error("STOCK INSUFICIENTE");
        }

        await descontarStockRepuesto(conexion,data.id_repuesto,data.cantidad);

        const crearDetalleRepuesto = await crearDetalleRepuestoModel(data);

        await conexion.commit();

        return crearDetalleRepuesto;

    } catch (error) {
        await conexion.rollback();

        throw error;       

    } finally {
        conexion.release();
    }
}   


export {
    crearDetalleRepuestoService
}