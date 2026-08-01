import { encontrarCliente } from "../models/cliente.model.js"
import { registroVehiculoModel, modificacionVehiculoModel } from "../models/vehiculos.models.js";

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

const modificacionVehiculoService = async(id,data) => {
    if(!data || Object.keys(data).length === 0){
        throw new Error("BODY VACIO");
    }
   
    const clienteRegistrado = await encontrarCliente(id);
    
    if(!clienteRegistrado){
        throw new Error("ID INEXISTENTE");    
    }

    const vehiculoModificado = await modificacionVehiculoModel(id,data);

    return vehiculoModificado;

}

export {
    registroVehiculoService,
    modificacionVehiculoService
}
