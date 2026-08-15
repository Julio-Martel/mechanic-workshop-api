import { registrarRepuestoService,
        eliminarRepuestoService
 } from "../services/repuestos.services.js";

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


/*const actualizarStockController = async(req,res) => {
    try {

    } catch(error){

    }
}*/

const eliminarRepuestoController = async(req,res) => {
    try{
        const {id} = req.params;
        const repuestoEliminado = await eliminarRepuestoService(id);

        res.status(202).json({
            mensaje: 'Repuesto eliminado con exito!'
        });

    }catch(error){
        if(error.message === 'SIN CAMBIOS'){
            return res.status(404).json({
                mensaje: 'ID no encontrado o no se han podido realizar cambios.'
            })
        }
        
        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}



export {
    registrarRepuestoController,
    //actualizarStockController
    eliminarRepuestoController
}