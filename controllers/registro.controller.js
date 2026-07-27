import registroService from "../services/registro.services.js"

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

export {
    registroController
}