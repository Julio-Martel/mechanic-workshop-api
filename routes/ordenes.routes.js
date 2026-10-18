import express from 'express';
import { crearOrdenController,
        cambiarEstadoController,
        consultarOrdenController,
        cancelarOrdenVehiculoController,
        filtrarOrdenesVerCantidad
 } from '../controllers/ordenes.controllers.js';

 import { quitarRepuestoDelDetalle } from '../controllers/detalleRepuesto.controller.js';

import { crearDetalleServicioController, todosLosDetallesServiciosController } from '../controllers/detalleServicio.controller.js';
import { crearDetalleRepuestoController } from '../controllers/detalleRepuesto.controller.js';
import { autenticarToken } from '../middlewares/autenticacion.middleware.js';
import { autorizarAccesoAdmin } from '../middlewares/autorizacion.middleware.js';

const ordenesRoutes = express.Router();

//RUTA CREAR ORDEN
ordenesRoutes.post('/crear', autenticarToken, autorizarAccesoAdmin ,crearOrdenController);

//RUTA VER ORDENES FINALIZADAS
ordenesRoutes.get('/filtrar', autenticarToken, autorizarAccesoAdmin, filtrarOrdenesVerCantidad);

//RUTA DETALLE DEL SERVICIO
ordenesRoutes.post('/crear/detalle', autenticarToken, autorizarAccesoAdmin, crearDetalleServicioController);

//RUTA VER TODOS LOS DETALLES DEL SERVICIO
ordenesRoutes.get('/datallesServicios', autenticarToken, autorizarAccesoAdmin, todosLosDetallesServiciosController);

//RUTA DETALLE DEL REPUESTO 
ordenesRoutes.post('/crear/detalle/repuestos', autenticarToken, autorizarAccesoAdmin, crearDetalleRepuestoController);

//RUTA CAMBIO DE ESTADO DE ORDEN
ordenesRoutes.patch('/:id', autenticarToken, autorizarAccesoAdmin, cambiarEstadoController);

//RUTA CONSULTAR ORDEN
ordenesRoutes.get('/:id', autenticarToken, autorizarAccesoAdmin,  consultarOrdenController);

//RUTA CANCELAR ORDEN
ordenesRoutes.patch('/:id',  autenticarToken, autorizarAccesoAdmin, cancelarOrdenVehiculoController);

ordenesRoutes.patch('/quitar/detalle/repuesto/:id', autenticarToken, autorizarAccesoAdmin,  quitarRepuestoDelDetalle);

export default ordenesRoutes;