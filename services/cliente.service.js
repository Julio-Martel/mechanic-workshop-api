import { verificarClientePorDni, registrarCliente, 
         modificarCliente, encontrarCliente } from "../models/cliente.model.js";

const registroService = async(data) => {

    if(!data || Object.keys(data).length === 0){
        throw new Error('FORMULARIO VACIO');
    }

    if(!data.nombre || !data.apellido || !data.dni || !data.telefono || !data.email){
        throw new Error('FORMULARIO INCOMPLETO');
    }

    const verificarCliente = await verificarClientePorDni(data.dni);

    if(verificarCliente !== undefined){
        throw new Error('CLIENTE YA REGISTRADO');
    }
    
    const clienteRegistrado = await registrarCliente(data);

    return clienteRegistrado;
}

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
    registroService,
    modificarServices    
}