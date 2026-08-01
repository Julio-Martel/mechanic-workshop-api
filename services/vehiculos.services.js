import { encontrarCliente } from "../models/cliente.model.js"
import { registroVehiculoModel } from "../models/vehiculos.models.js";

const registroVehiculoService = async(data) => {
    if(!data || Object.keys(data).length === 0){
        throw new Error("BODY VACIO");
    }

    if(!data.id_cliente || !data.marca || !data.anio || !data.patente || !data.color){
        throw new Error("CAMPOS INCOMPLETOS");
    }

    const clienteRegistrado = await encontrarCliente(data.id_cliente);     

    if(!clienteRegistrado){
        throw new Error("ID INEXISTENTE");   
    }

    const vehiculoRegistar = await registroVehiculoModel(data);

    return vehiculoRegistar;
}

export {
    registroVehiculoService
}
