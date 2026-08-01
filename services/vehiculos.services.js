import { encontrarCliente } from "../models/cliente.model.js"
import { registroVehiculoModel } from "../models/vehiculos.models.js";

const registroVehiculoService = async(data) => {
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
