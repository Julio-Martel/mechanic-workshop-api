import { verificarClientePorDni, registrarCliente, 
         modificarCliente, encontrarCliente, eliminarCliente } from "../models/cliente.model.js";

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

const eliminarService = async(id) => {
    const usuarioEliminado = await eliminarCliente(id);

    if(usuarioEliminado[0] === undefined){
        throw new Error(`USUARIO NO ENCONTRADO`);
    }

    if(usuarioEliminado.affectedRows === 0){
        throw new Error(`NO SE PUDO BORRAR`);
        
    }

    return usuarioEliminado;
}

export {
    registroService,
    modificarServices,
    eliminarService
}