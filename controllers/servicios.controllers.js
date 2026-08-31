import { crearServicioService,
        modificacionSerivicioService,
        eliminarServicioService,
        listarServiciosService } from "../services/servicios.services.js";

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

        console.log(error);

        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}

const modificacionSerivicioController = async(req,res) => {
    try{
        const {id} = req.params;
        const modificarServicio = await modificacionSerivicioService(id,req.body);
        
        res.status(202).json({
            mensaje: `Servicio con ID: ${id}, actualizado correctamente`
        })

    } catch(error){
        if(error.message === 'FALTA ID'){
            return res.status(403).json({
                mensaje: 'Debe ingresar el ID en la url para poder actualizar el servicio.'
            })
        }
        
        if(error.message === 'BODY VACIO'){
            return res.status(403).json({
                mensaje: 'No puede modificar el servicio si no manda datos.'
            })
        }
    
        if(error.message === 'NOMBRE DUPLICADO'){
            return res.status(403).json({
                mensaje: 'Nombre ya en la lista, utilize otro'
            })
        }


        if(error.message === 'INEXISTENTE'){
            return res.status(404).json({
                mensaje: 'ID de servicio no encontrado'
            })
        }

        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}

const eliminarServicioController = async(req,res) => {
    try {
        const {id} = req.params;
        const servicioEliminado = await eliminarServicioService(id);

        res.status(202).json({
            mensaje: 'Servicio eliminado con exito!'
        })

    } catch(error){
        if(error.message === 'ID INEXISTENTE'){
            return res.status(404).json({
                mensaje: 'Servicio no encontrado.'
            })
        }
    
        if(error.message === 'SIN CAMBIOS'){
            return res.status(403).json({
                mensaje: 'No se pudo completar la operacion'
            })
        }

        if(error.message === 'SERVICIOS ASOCIADOS'){
            return res.status(403).json({
                mensaje: 'El servicio se ha utilizado en ordenes historicas. Por el momento no se puede eliminar.'
            })
        }

        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }
} 

const listarServiciosController = async(req,res) => {
    try{
        const todosLosServicios = await listarServiciosService();

        res.status(202).json({
            mensaje: `SERVICIOS`,
            servicios: todosLosServicios
        });

    } catch(error){
        if(error.message === 'SIN DATOS'){
            return res.status(404).json({
                mensaje: 'No hay servicios en la base de datos'
            })
        }

        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}

export {
    crearServicioController,
    modificacionSerivicioController,
    eliminarServicioController,
    listarServiciosController
}