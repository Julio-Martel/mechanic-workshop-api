import { verificarVehiculoModel } from "../models/vehiculos.models.js";
import { encontrarMecanicoPorId } from "../models/mecanicos.model.js";
import { crearOrdenModel } from "../models/ordenes.models.js";

const crearOrdenServices = async(data) => {
    if(!data || Object.keys(data).length === 0){
        throw new Error("BODY VACIO");
    }

    if(!data.id_vehiculo || !data.id_mecanico || !data.fecha_ingreso || !data.fecha_entrega || !data.estado){
        throw new Error("DEBE MANDAR TODOS LOS DATOS");
    }

    const verificarVehiculo = await verificarVehiculoModel(data.id_vehiculo);

    if(!verificarVehiculo){
        throw new Error("ID VEHICULO NO EXISTE");
    }

    const verificarMecanico = await encontrarMecanicoPorId(data.id_mecanico);

    if(!verificarMecanico){
        throw new Error("ID MECANICO NO EXISTE");
    }

    const crearOrden = await crearOrdenModel(data);

    return crearOrden;
}


export {
    crearOrdenServices
}