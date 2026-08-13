import express from 'express';
import { registrarRepuestoController } from '../controllers/repuestos.controllers.js';

const repuestosRoutes = express.Router();

//RUTA REGISTRO DE REPUESTO
repuestosRoutes.post('/', registrarRepuestoController);

//RUTA ACTUALIZAR STOCK DE REPUESTO
repuestosRoutes.patch('/:id',/*AGREGAR HANDLER DE ACUTUALIZACION DE STOCK*/);

//RUTA CONSULTAR DISPONIBILIDAD DE REPUESTO
repuestosRoutes.get();

//RUTA DE ELIMINACION DE UN REPUESTOS
repuestosRoutes.delete('/:id',/*AGREGAR HANDLER DE ELIMINACION DE REPUESTOS*/);

export default repuestosRoutes;
