import { encontrarClientePorMail,
         registrarCliente
 } from "../models/cliente.model.js";
import bcrypt from 'bcrypt';

const registroService = async(data) => {
    if(!data || Object.keys(data).length === 0){
        throw new Error("BODY VACIO");
    }

    const datosUsuario = {
        nombre: data.nombre,
        apellido: data.apellido,
        dni: data.dni,
        telefono: data.telefono,
        email: data.email,
        pass: data.pass,
        rol: data.rol
    };

    if(!data.nombre || !data.apellido || !data.dni || !data.telefono || !data.email || !data.pass || !data.rol){
        throw new Error("DATOS INCOMPLETOS");
    }

    const emailDuplicado = await encontrarClientePorMail(datosUsuario.email);

    if(emailDuplicado){
        throw new Error("USUARIO DUPLICADO");
    }

    const hash = await bcrypt.hash(datosUsuario.pass,10);

    const usuarioRegistrado = await registrarCliente(datosUsuario,hash);

    return usuarioRegistrado;
}

export {
    registroService
}