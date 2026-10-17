import { encontrarClientePorMail,
         registrarCliente
 } from "../models/cliente.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const registroService = async(data) => {
    if(!data || Object.keys(data).length === 0){
        throw new Error("BODY VACIO");
    }

    if(!data.nombre && !data.apellido && !data.dni && !data.telefono && !data.email && !data.pass && !data.rol){
        throw new Error("DATOS INCOMPLETOS");
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

    const emailDuplicado = await encontrarClientePorMail(datosUsuario.email);

    if(emailDuplicado){
        throw new Error("USUARIO DUPLICADO");
    }

    const hash = await bcrypt.hash(datosUsuario.pass,10);

    const usuarioRegistrado = await registrarCliente(datosUsuario,hash);

    return usuarioRegistrado;
}

const loginService = async(data) => {
    const usuarioExistente = await encontrarClientePorMail(data.email);
    
    if(usuarioExistente === undefined){
        throw new Error("EMAIL INEXISTENTE");
    }

    const comprobarPass = bcrypt.compare(data.pass,usuarioExistente.pass);

    if(!comprobarPass){
        throw new Error("PASSWORD INCORRECTO");
    }

    const token = jwt.sign(
        {
            id: usuarioExistente.id,
            rol: usuarioExistente.rol
        },
        'secreto',
        {
            expiresIn: '1h'
        }
    );

    return token;
}

export {
    registroService,
    loginService
}