import { registroService, loginService } from "../services/registro.services.js"

const registroController = async(req,res) => {
    try{
        await registroService(req.body);

        res.status(202).json({
            mensaje: 'Registro con exito!'
        })

    } catch(error){

        if(error.message === 'BODY VACIO'){
            return res.status(403).json({
                mensaje: 'No se puede mandar el body vacio'
            })
        }

        if(error.message === 'USUARIO DUPLICADO'){
            return res.status(403).json({
                mensaje: 'El usuario ya existe'
            })
        }

        if(error.message === 'DATOS INCOMPLETOS'){
            return res.status(403).json({
               mensaje: 'Se deben mandar todos los datos.' 
            })
        } 

        res.status(505).json({
            mensaje: `ERROR INTERNO`
        })
    } 
}

const loginController = async(req,res) => {
    try {
        const usuarioEncontrado = await loginService(req.body);

        res.status(202).json({
            mensaje: 'Sesion iniciada'
        })

    } catch(error){
        if(error.message === 'EMAIL INEXISTENTE'){
            return res.status(404).json({
                mensaje: 'Email no encontrado.'
            })
        }

        if(error.message === 'PASSWORD INCORRECTO'){
            return res.status(404).json({
                mensaje: 'Password incorrecto'
            })
        }

        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }       
}

export {
    registroController,
    loginController
}



