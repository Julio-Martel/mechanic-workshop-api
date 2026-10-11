import { registroService } from "../services/registro.services.js"

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

    } catch(error){
        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }       
}

export {
    registroController,
    loginController
}



