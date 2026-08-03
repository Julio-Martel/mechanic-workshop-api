import { registroVehiculoService, modificacionVehiculoService, 
    eliminacionVehiculoService, consultaVehiculosPorClienteService } from "../services/vehiculos.services.js"

const registroController = async(req,res) => {
    try{
        const vehiculoRegistrado = await registroVehiculoService(req.body);

        res.status(202).json({
            mensaje: 'VEHICULOS REGISTRADO CON EXITO',
            datos: vehiculoRegistrado
        })

    } catch(error){
        if(error.message === 'BODY VACIO'){
            return res.status(403).json({
                mensaje: 'No se puede mandar el body esta vacio'
            })
        }

        if(error.message === 'CAMPOS INCOMPLETOS'){
            return res.status(403).json({
                mensaje: 'Debe mandar todos los datos'
            })
        }

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

const modificacionController = async(req,res) => {
    try{
        const {id} = req.params;
        const vehiculoModificado = await modificacionVehiculoService(id,req.body);

        res.status(202).json({
            mensaje: 'Vehiculo modificado con exito!',
            datos: vehiculoModificado
        })

    } catch(error){
        res.status(500).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}

const eliminacionVehiculoController = async(req,res) => {
    try{
        const {id} = req.params;
        const vehiculoEliminado = await eliminacionVehiculoService(id);
    
        res.status(202).json({
            mensaje: 'Vehiculo eliminado con exito!'           
        })
    
    } catch(error){
        if(error.message === 'ID INEXISTENTE'){
            return res.status(404).json({
                mensaje: 'El id del vehiculo no existe'
            })
        }

        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }        
}

const consultaVehiculosPorClienteController = async(req,res) => {
    try{
        const {id} = req.params;
        const vehiculosFiltrados = await consultaVehiculosPorClienteService(id);

        res.status(202).json({
            mensaje: 'VEHICULOS:',
            vehiculos: vehiculosFiltrados
        })

    } catch(error){
        if(error.message === 'SIN ID'){
            return res.status(403).json({
                mensaje: 'ID necesario'
            })
        }

        if(error.message === 'NO HAY VEHICULOS'){
            return res.status(404).json({
                mensaje: 'No ha vehiculos vinculados a ese id de cliente'
            })
        }

        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}

export {
    registroController,
    modificacionController,
    eliminacionVehiculoController,
    consultaVehiculosPorClienteController
}