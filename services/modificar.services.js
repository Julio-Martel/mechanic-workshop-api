import { modificarCliente, encontrarCliente } from "../models/modificar.model.js";


const modificarServices = async(id,data) => {
    const clienteEncontrado = await encontrarCliente(id);

    if(clienteEncontrado === undefined){
        throw new Error(`CLIENTE NO ENCONTRADO`);
    }

    if(!data || Object.keys(data).length === 0){
        throw new Error(`BODY VACIO`);
    }

    const modCliente = await modificarCliente(data,id);

    return modCliente;

}

export {
    modificarServices    
}