import { crearOrdenServices } from "../services/ordenes.services.js";

const crearOrdenController = async(req,res) => {
    try {
        const ordenCreada =  await crearOrdenServices(req.body);
        
        res.status(202).json({
            mensaje: 'Orden creada con exito.',
            ordenCreada: ordenCreada
        })
    
    } catch(error){
        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}


export {
    crearOrdenController
}