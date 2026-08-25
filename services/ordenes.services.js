import { verificarVehiculoModel } from "../models/vehiculos.models.js";
import { encontrarMecanicoPorId } from "../models/mecanicos.model.js";
import { crearOrdenModel, 
         verificarOrdenCanceladaFinalizadaModel, 
         cambiarEstadoModel,
         consultarOrdenModel,
         cancelarOrdenModel,
         comprobarDuplicadoOrdenVehiculo,
        limiteOrdenes } from "../models/ordenes.models.js";
import { serviciosAsociadosAUnaOrden } from "../models/servicios.models.js";

const crearOrdenServices = async(data) => {
    if(!data || Object.keys(data).length === 0){
        throw new Error("BODY VACIO");
    }

    if(!data.id_vehiculo || !data.id_mecanico || !data.fecha_entrega || !data.estado){
        throw new Error("DEBE MANDAR TODOS LOS DATOS");
    }

    const verificarVehiculo = await verificarVehiculoModel(data.id_vehiculo);

    if(!verificarVehiculo){
        throw new Error("ID VEHICULO NO EXISTE");
    }

    const verificarEstadoDuplicado = await comprobarDuplicadoOrdenVehiculo(data.id_vehiculo);

    if(verificarEstadoDuplicado){
        throw new Error("ORDEN DUPLICADA");
    }

    const verificarMecanico = await encontrarMecanicoPorId(data.id_mecanico);

    if(!verificarMecanico){
        throw new Error("ID MECANICO NO EXISTE");
    }

    const verificarLimiteOrdenesDelMecanico = await limiteOrdenes(data.id_mecanico);
        
    if(verificarLimiteOrdenesDelMecanico > 3){
        throw new Error("SUPERA EL LIMITE");     
    }

    const crearOrden = await crearOrdenModel(data);

    if(!crearOrden){
        throw new Error("SIN CAMBIOS");
    }

    return crearOrden;
}

const cambiarEstadoService = async(id,data) => {
    if(!data || Object.keys(data).length === 0){
        throw new Error("BODY VACIO");   
    }

    if(data.estado !== 'finalizada' && data.estado !== 'cancelada' && data.estado !== 'en reperacion'){
        throw new Error("ESTADO INCORRECTO");
    }

    const verificarEstadoCancelFin = await verificarOrdenCanceladaFinalizadaModel(id);

    if(verificarEstadoCancelFin !== undefined){
    
        throw new Error("NO SE PUEDE CAMBIAR ESTADO");
    }

    if(!data.estado === 'finalizada'){
         
    }

    const cambiarEstado = await cambiarEstadoModel(id,data);

    return cambiarEstado;
}

const consultarOrdenService = async(id) => { 
    const consultarOrden = await consultarOrdenModel(id);

    if(consultarOrden === undefined){
        throw new Error("ID INEXISTENTE");
    }

    return consultarOrden;
}

const cancelarOrdenVehiculoService = async(id) => {
    const ordenCancelada = await cancelarOrdenModel(id);

    if(ordenCancelada === 0){
        throw new Error("SIN CANCELAR");
    }

    return ordenCancelada;
}

export {
    crearOrdenServices,
    cambiarEstadoService,
    consultarOrdenService,
    cancelarOrdenVehiculoService
}