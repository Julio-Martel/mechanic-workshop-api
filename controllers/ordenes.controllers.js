import { crearOrdenServices,
         cambiarEstadoService,
         consultarOrdenService,
         cancelarOrdenVehiculoService
} from "../services/ordenes.services.js";


const crearOrdenController = async(req,res) => {
    try {
        const ordenCreada =  await crearOrdenServices(req.body);
        
        res.status(202).json({
            mensaje: 'Orden creada con exito.'
        })
    
    } catch(error){

        if(error.message === 'BODY VACIO'){
            return res.status(403).json({
                mensaje: 'No se pueden mandar el body vacio'
            })
        }
    
        if(error.message === 'DEBE MANDAR TODOS LOS DATOS'){
            return res.status(403).json({
                mensaje: 'Debe mandar todos los datos'
            })
        }

        if(error.message === 'ID VEHICULO NO EXISTE'){
            return res.status(404).json({
                mensaje: 'Vehiculo no encontrado con ese id'
            })
        }

        if(error.message === 'ID MECANICO NO EXISTE'){
            return res.status(404).json({
                mensaje: 'Mecanico no encontrado con ese id'
            })
        }

        if(error.message === 'ORDEN DUPLICADA'){
            return res.status(403).json({
                mensaje: 'Este vehiculo no puede tener mas de una orden en pendiente o en reparacion'
            })
        }

        if(error.message === 'SUPERA EL LIMITE'){
            return res.status(403).json({
                mensaje: 'Se ha sobrepasado el limite de ordenes asignadas a este mecanico.'
            })
        }

        if(error.message === 'SIN CAMBIOS'){
            return res.status(403).json({
                mensaje: 'No se han podido realizar los cambios'
            })
        }
        
        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })

    }
}

const cambiarEstadoController = async(req,res) => {
    try {
        const {id} = req.params;

        const estadoCambiado = await cambiarEstadoService(id,req.body);

        res.status(202).json({
            mensaje: 'Estado de orden actualizado.'
        })

    } catch(error){

        if(error.message === 'BODY VACIO'){
            return res.status(403).json({
                mensaje: 'Se debe mandar el estado'
            });
        }

        if(error.message === 'ESTADO INCORRECTO'){
            return res.status(403).json({
                mensaje: 'Debe mandar un estado valido: pendiente, en reparacion, finalizada o cancelada'
            })
        }

        if(error.message === 'NO SE PUEDE CAMBIAR ESTADO'){
            return res.status(403).json({
                mensaje: 'No se puede modificar el estado de una orden finaliza o cancelada'
            })
        }

        if(error.message === 'SIN CANTIDAD MINIMA'){
            return res.status(403).json({
                mensaje: 'No se puede finalizar una orden si no tiene al menos un servicio asignado.'
            })
        }

        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}

const consultarOrdenController = async(req,res) => {
    try {
        const {id} = req.params;
        const orden = await consultarOrdenService(id);

        res.status(202).json({
            mensaje: 'Orden:',
            orden: orden
        })

    } catch(error){
        if(error.message === 'ID INEXISTENTE'){
            return res.status(404).json({
                mensaje: 'No se ha encontrado una orden con ese nro de ID'
            })
        }

        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}

const cancelarOrdenVehiculoController = async(req,res) => {
    try{
        const {id} = req.params;
        const cancelarOrden = await cancelarOrdenVehiculoService(id);

        res.status(202).json({
            mensaje: 'Orden cancelada con exito!'
        })

    }catch(error){
        if(error.message === 'SIN CAMBIOS'){
            return res.status(404).json({
                mensaje: 'No se ha realizado la cancelacion.'
            })
        }

        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }    
}

export {
    crearOrdenController,
    cambiarEstadoController,
    consultarOrdenController,
    cancelarOrdenVehiculoController
}