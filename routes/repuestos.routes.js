import express from 'express';
import { registrarRepuestoController,
         actualizarStockController,
         eliminarRepuestoController
 } from '../controllers/repuestos.controllers.js';

const repuestosRoutes = express.Router();

//RUTA REGISTRO DE REPUESTO
repuestosRoutes.post('/', registrarRepuestoController);

//RUTA ACTUALIZAR STOCK DE REPUESTO
repuestosRoutes.patch('/:id',actualizarStockController);

//RUTA CONSULTAR DISPONIBILIDAD DE REPUESTO
repuestosRoutes.get();

//RUTA DE ELIMINACION DE UN REPUESTOS
repuestosRoutes.delete('/:id',eliminarRepuestoController);

export default repuestosRoutes;
