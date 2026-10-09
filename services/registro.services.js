import { encontrarClientePorMail } from "../models/cliente.model.js";
import bcrypt from 'bcrypt';

const registroService = async(data) => {
    const datosUsuario = {
        email: data.email,
        pass: data.pass,
    }

    const emailDuplicado = await encontrarClientePorMail(datosUsuario.email);

    if(emailDuplicado){
        throw new Error("USUARIO DUPLICADO");
    }

    const hash = await bcrypt.hash(datosUsuario.pass);

    /* 
        CONTINUAR AQUI
    
    */

}


export {
    registroService
}