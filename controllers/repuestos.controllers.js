import { registrarRepuestoService } from "../services/repuestos.services.js";

const registrarRepuestoController = async(req,res) => {
    try{
      const repuestoRegistrado = await registrarRepuestoService(req.body);
      
      res.status(202).json({
        mensaje: 'Repuesto registrado'
      });

    }catch(error){
        if(error.message === 'NOMBRE DUPLICADO'){
            return res.status(403).json({
                mensaje: 'Nombre duplicado. Ingrese otro'
            })
        }
    
        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}


const actualizarStockController = async(req,res) => {
    try {

    } catch(error){

    }
}

export {
    registrarRepuestoController,
    actualizarStockController
}