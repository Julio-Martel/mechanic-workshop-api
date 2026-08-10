import { crearServicioService,
        modificacionSerivicioService } from "../services/servicios.services.js";

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
    
        if(error.message === 'DATOS INCOMPLETOS'){
            return res.status(403).json({
                mensaje: 'Debe mandar al menos un dato para poder modificar el servicio.'
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

export {
    crearServicioController,
    modificacionSerivicioController
}