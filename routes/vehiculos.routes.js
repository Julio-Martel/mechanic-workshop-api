import express from 'express';
import { registroVehiculosController, modificacionController, 
    eliminacionVehiculoController, consultaVehiculosPorClienteController,
consultaVehiculosPorPatenteController} from '../controllers/vehiculos.controller.js';

const vehiculosRoutes = express.Router();

// RUTA PARA CONSULTA DE VEHICULOS SEGUN SU PATENTE
vehiculosRoutes.get('/:patente', consultaVehiculosPorPatenteController);

// RUTA PRA CONSULTA DE VEHICULOS DE UN DETERMINADO CLIENTE
vehiculosRoutes.get('/:id', consultaVehiculosPorClienteController);

// RUTA DE REGISTRO DE UN VEHICULO
vehiculosRoutes.post('/registro', registroVehiculosController);

// RUTA DE MODIFICACION DE DATOS DE UN VEHICULO
vehiculosRoutes.patch('/:id', modificacionController);

// RUTA DE ELIMINACION DE UN VEHICULO
vehiculosRoutes.delete('/:id', eliminacionVehiculoController);

export default vehiculosRoutes;