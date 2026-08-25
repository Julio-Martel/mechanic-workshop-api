import { crearDetalleServicioService } from "../services/detalleServicios.service.js";

const crearDetalleServicioController = async(req,res) => {
    try{
        const detalleServicioCreado = await crearDetalleServicioService(req.body)
        
        res.status(202).json({
            mensaje: 'Detalle del servicio creado con exito.'
        })
    
    }catch(error){
        if(error.message === 'BODY VACIO'){
            return res.status(403).json({
                mensaje: 'No se puede mandar el body vacio'
            })
        }

        if(error.message === 'DATOS INCOMPLETOS'){
            return res.status(403).json({
                mensaje: 'Se deben mandar todos los datos'
            })
        }

        if(error.message === 'ID INEXISTENTE ORDEN'){
            return res.status(404).json({
                mensaje: 'El id de orden no existe.'
            })
        }

        if(error.message === 'ID INEXISTENTE SERVICIO'){
            return res.status(404).json({
                mensaje: 'El id de servicio no existe.'
            })
        }

        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}

export {
    crearDetalleServicioController
}