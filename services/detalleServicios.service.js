import { crearDetalleServicio } from "../models/detalleServicios.model.js";
import { consultarOrdenModel } from "../models/ordenes.models.js";

const crearDetalleServicioService = async(data) => {
    const verificarOrden = await consultarOrdenModel(data.id_orden);

    if(!verificarOrden){
        throw new Error("ID INEXISTENTE ORDEN");   
    }

    // VERIFICAR EL ID DEL SERVICIO PARA LA CREACION DEL DETALLE DE SERVICIO
   // const verificarServicio = await

   


}

export {
    crearDetalleServicioService
}