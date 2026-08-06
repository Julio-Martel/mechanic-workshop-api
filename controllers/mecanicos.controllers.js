import { registroMecanicoService,
         modificacionDatosMecanicoService,
         borrarMecanicoService } from "../services/mecanicos.services.js"

const registroMecanicoController = async(req,res) => {
    try {
        const registrarMecanico = await registroMecanicoService(req.body);

        res.status(202).json({
            mensaje: 'Mecanico registrado con exito!'
        })

    } catch(error){
        if(error.message === 'BODY VACIO'){
            return res.status(403).json({
                mensaje: 'No se permite mandar el body vacio'
            })
        }

        if(error.message === 'YA REGISTRADO'){
            return res.status(403).json({
                mensaje: 'El mecanico ya esta registrado'
            })
        }

        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        });
    }
}

const modificacionDatosMecanicoController = async(req,res) => {
    try{
        const {id} = req.params;
        const mecanicoModificado = await modificacionDatosMecanicoService(id,req.body);

        res.status(202).json({
            mensaje: 'Datos actualizados con exito!'
        })

    } catch(error){
        if(error.message === 'BODY VACIO'){
            return res.status(403).json({
                mensaje: 'Debe mandar al menos un dato'
            })
        }
    
        if(error.message === 'ID INEXISTENTE'){
            return res.status(404).json({
                mensaje: 'No existe ese ID'
            })
        }
        
        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}

const borrarMecanicoController = async(req,res) => {
    try{
        const {id} = req.params;



    } catch(error){
        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}


export {
    registroMecanicoController,
    modificacionDatosMecanicoController,
    borrarMecanicoController
}