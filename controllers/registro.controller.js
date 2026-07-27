import registroService from "../services/registro.services.js"

const registroController = async(req,res) => {
    try {
        const clienteRegistrado = await registroService(req.body);    
        
        res.status(201).json({
            mensaje: 'Cliente registrado con exito!'
        })

    } catch(error) {
        if(error.message === 'FORMULARIO VACIO'){
            return res.status()
        }


        res.status(500).json({
            mensaje: 'ERROR INTERNO',
            error: error
        })
    }    
}

export {
    registroController
}