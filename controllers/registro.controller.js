import registroService from "../services/registro.services.js"

const registroController = async(req,res) => {
    try {
        const {nombre,apellido,dni,telefono,email,fecha_registro} = req.body;
        const clienteRegistrado = await registroService()    
        
        res.status(200).json({
            mensaje: 'Cliente registrado con exito!'
        })

    } catch(error) {
        res.status(500).json({
            mensaje: 'ERROR INTERNO',
            error: error
        })
    }    
}

export {
    registroController
}