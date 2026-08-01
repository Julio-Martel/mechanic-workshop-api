import { registroVehiculoService } from "../services/vehiculos.services.js"

const registroController = async(req,res) => {
    try{
        const vehiculoRegistrado = await registroVehiculoService(req.body);

        res.status(202).json({
            mensaje: 'VEHICULOS REGISTRADO CON EXITO',
            datos: vehiculoRegistrado
        })

    } catch(error){
        if(error.message === 'ID INEXISTENTE'){
            return res.status(404).json({
                mensaje: 'El ID del cliente no existe'
            })
        }

        res.status(500).json({
            mensaje: 'ERROR INTERNO'
        });       
    }
}

export {
    registroController
}