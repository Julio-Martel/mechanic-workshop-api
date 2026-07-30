import { registroService, modificarServices, 
         eliminarService, consultarService } from "../services/cliente.service.js";

const registroController = async(req,res) => {
    try {
        const clienteRegistrado = await registroService(req.body);    
        
        res.status(201).json({
            mensaje: 'Cliente registrado con exito!'
        })

    } catch(error) {
        if(error.message === 'FORMULARIO VACIO'){
            return res.status(400).json({
                mensaje: 'No se puede registrar sin los datos.'
            })
        }

        if(error.message === 'FORMULARIO INCOMPLETO'){
            return res.status(400).json({
                mensaje: 'No se pueden mandar formulario con datos incompletos'
            })
        }

        if(error.message === 'CLIENTE YA REGISTRADO'){
            return res.status(400).json({
                mensaje: 'Cliente ya registrado'
            })
        }

        res.status(500).json({
            mensaje: 'ERROR INTERNO',
            error: error
        })
    }    
}

const modificarController = async(req,res) => {
    try{
        const {id} = (req.params);
        const clienteModificado = await modificarServices(id,req.body);

        res.status(202).json({
            mensaje: 'Datos del cliente actualizados con exito!'
        })

    } catch(error){
        if(error.message === 'CLIENTE NO ENCONTRADO'){
            return res.status(404).json({
                mensaje: 'El cliente no fue encontrado'
            })
        }

        if(error.message === 'BODY VACIO'){
            return res.status(400).json({
                mensaje: 'Debe mandar algun dato'
            })
        }

        res.status(500).json({
            mensaje: 'ERROR INTERNO',
            error:error
        })
    }
}

const eliminarController = async(req,res) => {
    try {
        const {id} = req.params;
        const clienteEliminado = await eliminarService(id);

        res.status(202).json({
            mensaje: 'Se ha eliminado el cliente con exito!'
        })

    } catch(error){
        if(error.message === 'NO SE PUDO BORRAR'){
            res.status(404).json({
                mensaje: 'No se ha podido completar la operacion'
            })
        }

        if(error.message === 'USUARIO NO ENCONTRADO'){
            mensaje: 'Usuario inexistente'
        }

        res.status(500).json({
            mensaje: 'ERROR INTERNO',
            error: error
        })
    }
}

const consultarController = async(req,res) => {
    try {
        const {id} = req.params;
        const clienteObtenido = await consultarService(id);

        res.status(202).json({
            mensaje: 'DETALLES DEL CLIENTE: ',
            cliente: clienteObtenido[0]
        });

    } catch(error){
        if(error.message === 'CLIENTE NO ENCONTRADO'){
            return res.status(404).json({
                mensaje: 'ID de cliente no existente'
            })
        }

        res.status(500).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}

export {
    registroController,
    modificarController,
    eliminarController,
    consultarController
}