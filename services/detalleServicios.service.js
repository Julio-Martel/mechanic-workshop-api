import { crearDetalleServicio } from "../models/detalleServicios.model.js";
import { consultarOrdenModel } from "../models/ordenes.models.js";
import { encontrarServicioPorId } from "../models/servicios.models.js";

const crearDetalleServicioService = async(data) => {
    const verificarOrden = await consultarOrdenModel(data.id_orden);

    if(!verificarOrden){
        throw new Error("ID INEXISTENTE ORDEN");   
    }

   const verificarServicio = await encontrarServicioPorId(data.id_servicio);

    if(verificarServicio){
        throw new Error("ID INEXISTENTE SERVICIO");
    }

    


}

export {
    crearDetalleServicioService
} 