import { modificarCliente, encontrarCliente } from "../models/modificar.model.js";


const modificarServices = async(id,data) => {
    const clienteEncontrado = await encontrarCliente(id);
    const valores = [];


    if(clienteEncontrado.length === undefined){
        throw new Error(`CLIENTE NO ENCONTRADO`);
    }

    if(data.nombre){
        const nombre = 'nombre = ?';
        valores.push(nombre);
    }

    if(data.apellido){
        const apellido = 'apellido = ?';
        valores.push(apellido);
    }

    if(data.dni){
        const dni = 'dni = ?';
        valores.push(dni);
    }

    if(data.telefono){
        const telefono = 'telefono = ?';
        valores.push(telefono);
    }


    if(data.email){
        const email = 'email = ?';
        valores.push(email);
    }

    if(valores.length === 0){
        throw new Error('BODY VACIO');
    }


    const parametros = valores.join();

    const modCliente = await modificarCliente(parametros);

    const modCliente;

}

export {
    modificarServices    
}