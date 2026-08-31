import { crearDetalleRepuestoService } from "../services/detalleRepuesto.service.js"

const crearDetalleRepuestoController = async(req,res) => {
    try{
        const crearDetalleRepuesto = await crearDetalleRepuestoController(req.body);

        res.status(202).json({
            mensaje: 'Detalle del repuesto creado'
        })

    }catch(error){
        if(error.message === 'BODY VACIO'){
            return res.status(403).json({
                mensaje: 'No puede mandar el body vacio'
            })
        }

        if(error.message === 'FALTAN DATOS'){
            return res.status(403).json({
                mensaje: 'Faltan datos.'
            })
        }

        if(error.message === 'ID INEXISTENTE ORDEN'){
            return res.status(404).json({
                mensaje: 'No existe ese ID de orden.'
            })
        }

        if(error.message === 'ID INEXISTENTE REPUESTO'){
            return res.status(404).json({
                mensaje: 'No existe ese ID de repuesto.'
            })
        }

        if(error.message === 'STOCK INSUFICIENTE'){
            return res.status(403).json({
                mensaje: 'La cantidad supera el stock actual del repuesto.'
            })
        }

        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}

export {
    crearDetalleRepuestoController
}