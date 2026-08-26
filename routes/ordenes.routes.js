import express from 'express';
import { crearOrdenController,
        cambiarEstadoController,
        consultarOrdenController,
        cancelarOrdenVehiculoController
 } from '../controllers/ordenes.controllers.js';

import { crearDetalleServicioController } from '../controllers/detalleServicio.controller.js';
import { crearDetalleRepuestoController } from '../controllers/detalleRepuesto.controller.js';

const ordenesRoutes = express.Router();

//RUTA CREAR ORDEN
ordenesRoutes.post('/crear', crearOrdenController);

//RUTA CAMBIO DE ESTADO DE ORDEN
ordenesRoutes.patch('/:id', cambiarEstadoController);

//RUTA CONSULTAR ORDEN
ordenesRoutes.get('/:id', consultarOrdenController);

//RUTA CANCELAR ORDEN
ordenesRoutes.patch('/:id', cancelarOrdenVehiculoController);

//RUTA DETALLE DEL SERVICIO
ordenesRoutes.post('/crear/detalle',crearDetalleServicioController);

//RUTA DETALLE DEL REPUESTO
ordenesRoutes.post('/crear/detalle/repuestos', crearDetalleRepuestoController);

export default ordenesRoutes;