import { crearServicioService } from "../services/servicios.services.js";

const crearServicioController = async(req,res) => {
    try {
        const servicioCreado = await crearServicioService(req.body);
    
        res.status(202).json({
            mensaje: 'Servicio creado con exito!'
        })

    } catch(error){
        if(error.message === 'BODY VACIO'){
            return res.status(403).json({
                mensaje: 'No se puede mandar el body vacio'
            })
        }

        if(error.message === 'SERVICIO DUPLICADO'){
            return res.status(403).json({
                mensaje: 'El servicio ya se encuentra'
            })
        }

        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}

export {
    crearServicioController
}