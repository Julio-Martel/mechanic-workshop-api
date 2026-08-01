import express from 'express';
import { registroController, modificacionController } from '../controllers/vehiculos.controller.js';

const vehiculosRoutes = express.Router();

// RUTA DE REGISTRO DE UN VEHICULO
vehiculosRoutes.post('/registro', registroController);

// RUTA DE MODIFICACION DE DATOS DE UN VEHICULO
vehiculosRoutes.patch('/:id', modificacionController);

// RUTA DE ELIMINACION DE UN VEHICULO


export default vehiculosRoutes;