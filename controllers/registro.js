import { registroService } from "../services/registro.services.js"

const registroController = async(req,res) => {
    try{
        await registroService(req.body);

        res.status(202).json({
            mensaje: 'Registro con exito!'
        })

    } catch(error){
        res.status(505).json({
            mensaje: `ERROR INTERNO`
        })
    } 
}

export {
    registroController
}



