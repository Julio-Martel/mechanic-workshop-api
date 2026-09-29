import express from 'express';
import { registrarRepuestoController,
         actualizarStockController,
         eliminarRepuestoController,
         repuestosDispController,
         filtrarRepuestosController
 } from '../controllers/repuestos.controllers.js';

const repuestosRoutes = express.Router();

//RUTA DE TODOS LOS REPUESTOS
repuestosRoutes.get('/', filtrarRepuestosController);

//RUTA CONSULTAR DISPONIBILIDAD DE REPUESTO
repuestosRoutes.get('/disponibilidad', repuestosDispController);

//RUTA REGISTRO DE REPUESTO
repuestosRoutes.post('/', registrarRepuestoController);

//RUTA ACTUALIZAR STOCK DE REPUESTO
repuestosRoutes.patch('/:id',actualizarStockController);

//RUTA DE ELIMINACION DE UN REPUESTOS
repuestosRoutes.delete('/:id',eliminarRepuestoController);

export default repuestosRoutes;
