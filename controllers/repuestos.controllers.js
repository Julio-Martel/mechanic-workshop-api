import { json } from "express";
import { registrarRepuestoService,
        eliminarRepuestoService,
        actualizarStockService,
        repuestosDispService
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


const actualizarStockController = async(req,res) => {
    try {
        const {id} = req.params;
        const {cantidad} = req.body;

        const stockActualizado = await actualizarStockService(id,req.body);

        res.status(202).json({
            mensaje: 'Stock actualizado.'
        })

    } catch(error){
        if(error.message === 'BODY VACIO'){
            return res.status(403).json({
                mensaje: 'Debe mandar la cantidad'
            })
        }
    
        if(error.message === 'NUMERO NEGATIVO'){
            return res.status(403).json({
                mensaje: 'Se debe mandar un numero positivo.'
            })
        }
    
        if(error.message === 'NO ENCONTRADO'){
            return res.status(404).json({
                mensaje: 'ID de repuesto no encontrado.'
            })
        }

        if(error.message === 'NO ES NUMERO'){
            return res.status(403).json({
                mensaje: 'Se debe ingresar un numero.'
            })
        }

        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}

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
        
        if(error.message === 'TIENE ORDENES'){
            return res.status(403).json({
                mensaje: 'El repuesto tiene ordenes asociadas. No se puede eliminar.'
            })
        }

        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}

const repuestosDispController = async(req,res) => {
    try{
        const {stock} = req.query;
        const repuestosFiltrados = await repuestosDispService(stock);

        res.status(202).json({
            repuestos: repuestosFiltrados
        })

    }catch(error){
        res.status(505),json({
            mensaje: 'ERROR INTERNO'
        })
    }   
}

export {
    registrarRepuestoController,
    actualizarStockController,
    eliminarRepuestoController,
    repuestosDispController
}