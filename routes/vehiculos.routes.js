import express from 'express';
import { registroController, modificacionController, eliminacionVehiculoController } from '../controllers/vehiculos.controller.js';

const vehiculosRoutes = express.Router();

// RUTA DE REGISTRO DE UN VEHICULO
vehiculosRoutes.post('/registro', registroController);

// RUTA DE MODIFICACION DE DATOS DE UN VEHICULO
vehiculosRoutes.patch('/:id', modificacionController);

// RUTA DE ELIMINACION DE UN VEHICULO
vehiculosRoutes.delete('/:id', eliminacionVehiculoController);

// RUTA PRA CONSULTA DE VEHICULOS DE UN DETERMINADO VEHICULO
vehiculosRoutes.get('/:d', /*AGREGAR HANDLER */);


export default vehiculosRoutes;