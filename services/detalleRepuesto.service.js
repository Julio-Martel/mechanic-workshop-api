import { consultarOrdenModel } from "../models/ordenes.models.js"
import { encontrarRepuestoPorId, descontarStockRepuesto } from "../models/repuestos.models.js";
import { crearDetalleRepuestoModel, 
         buscarDetalleRepuesto,
         eliminarDetalleRepuesto, } from "../models/detalleRepuesto.models.js";
import db from '../config/db.js'
import { incrementarStockDevuelto } from "../models/repuestos.models.js";


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

const quitarRepuestoDelDetalleService = async(id) => {
    const conexion = await db.getConnection();

    try {
        await conexion.beginTransaction();

        const detalleEncontrado = await buscarDetalleRepuesto(conexion,id);

        if(!detalleEncontrado){
            throw new Error("NO ENCONTRADO");
        }

        const cantidadRepuesto = detalleEncontrado.cantidad;

        const detalleEliminado = await eliminarDetalleRepuesto(conexion,id);

        if(detalleEliminado === 0){
            throw new Error("SIN CAMBIOS");
        }

        const stockDevuelto = await incrementarStockDevuelto(conexion, detalleEncontrado.id_repuesto, cantidadRepuesto);

        if(stockDevuelto === 0){
            throw new Error("NO SE REALIZARON CAMBIOS");
        }

        await conexion.commit();

    } catch(error){

        conexion.rollback();
        throw error;

    } finally {
        conexion.release();
    }

}

export {
    crearDetalleRepuestoService,
    quitarRepuestoDelDetalleService
}