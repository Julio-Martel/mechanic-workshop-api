import { crearDetalleServicio } from "../models/detalleServicios.model.js";
import { consultarOrdenModel  ,verificarOrdenCanceladaFinalizadaModel} from "../models/ordenes.models.js";
import { encontrarServicioPorId } from "../models/servicios.models.js";

const crearDetalleServicioService = async(data) => {
    if(!data || Object.keys(data).length === 0){
        throw new Error("BODY VACIO");
    }

    if(!data.id_orden || !data.id_servicio || !data.precio_aplicado){
        throw new Error("DATOS INCOMPLETOS");
        
    }   

    const verificarOrdenFinalizada = await verificarOrdenCanceladaFinalizadaModel(data.id_orden);


    if(verificarOrdenFinalizada !== undefined){
        throw new Error("NO SE PUEDE CREAR DETALLE SERVICIO");
    }

    const verificarOrden = await consultarOrdenModel(data.id_orden);

    if(!verificarOrden){
        throw new Error("ID INEXISTENTE ORDEN");   
    }

   const verificarServicio = await encontrarServicioPorId(data.id_servicio);

    if(verificarServicio){
        throw new Error("ID INEXISTENTE SERVICIO");
    }

    const detalleServicio = await crearDetalleServicio(data.id_orden, data.id_servicio, data.precio_aplicado);

    return detalleServicio;
}

export {
    crearDetalleServicioService
} 