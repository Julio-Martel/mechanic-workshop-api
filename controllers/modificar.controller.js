import { modificarServices } from "../services/modificar.services.js"

const modificarController = async(req,res) => {
    try{
        const {id} = req.params;
        const clienteModificado = await modificarServices(id,req.body);




    } catch(error){
        if(error.message = 'CLIENTE NO ENCONTRADO'){
            return res.status(404).json({
                mensaje: 'El cliente no fue encontrado'
            })
        }

        res.status(500).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}

export {
    modificarController
}