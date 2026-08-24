import { crearDetalleServicioService } from "../services/detalleServicios.service.js";

const crearDetalleServicioController = async(req,res) => {
    try{
        const detalleServicioCreado = await crearDetalleServicioService(req.body)
        
        res.status(202).json({
            mensaje: 'Detalle del servicio creado con exito.'
        })
    
    }catch(error){
        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}

export {
    crearDetalleServicioController
}