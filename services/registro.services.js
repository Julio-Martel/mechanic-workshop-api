import { verificarClientePorDni, registrarCliente } from "../models/registro.model.js";

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

export default registroService;