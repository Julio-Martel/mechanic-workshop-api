import { crearDetalleRepuestoService } from "../services/detalleRepuesto.service.js"

const crearDetalleRepuestoController = async(req,res) => {
    try{
        const crearDetalleRepuesto = await crearDetalleRepuestoController(req.body);

        res.status(202).json({
            mensaje: 'Detalle del servicio creado:',
            crearDetalleRepuesto: crearDetalleRepuesto
        })

    }catch(error){
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