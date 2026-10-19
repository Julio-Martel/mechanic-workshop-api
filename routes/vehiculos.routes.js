import express from 'express';
import { registroVehiculosController, modificacionController, 
    eliminacionVehiculoController, consultaVehiculosPorClienteController,
consultaVehiculosPorPatenteController} from '../controllers/vehiculos.controller.js';

import { autorizarAccesoAdmin, autorizarAccesoCliente } from '../middlewares/autorizacion.middleware.js';
import { autenticarToken } from '../middlewares/autenticacion.middleware.js';

const vehiculosRoutes = express.Router();

// RUTA PARA CONSULTA DE VEHICULOS SEGUN SU PATENTE
vehiculosRoutes.get('/:patente', consultaVehiculosPorPatenteController);

// RUTA PRA CONSULTA DE VEHICULOS DE UN DETERMINADO CLIENTE
vehiculosRoutes.get('/cliente/:id', consultaVehiculosPorClienteController);

// RUTA DE REGISTRO DE UN VEHICULO
vehiculosRoutes.post('/registro', autenticarToken, autorizarAccesoCliente, registroVehiculosController);

// RUTA DE MODIFICACION DE DATOS DE UN VEHICULO
vehiculosRoutes.patch('/:id', autenticarToken, autorizarAccesoCliente, modificacionController);

// RUTA DE ELIMINACION DE UN VEHICULO
vehiculosRoutes.delete('/:id',autenticarToken, autorizarAccesoAdmin, eliminacionVehiculoController);

export default vehiculosRoutes;