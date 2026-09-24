import express from 'express';
import { crearOrdenController,
        cambiarEstadoController,
        consultarOrdenController,
        cancelarOrdenVehiculoController,
        filtrarOrdenesVerCantidad
 } from '../controllers/ordenes.controllers.js';

 import { quitarRepuestoDelDetalle } from '../controllers/detalleRepuesto.controller.js';

import { crearDetalleServicioController } from '../controllers/detalleServicio.controller.js';
import { crearDetalleRepuestoController } from '../controllers/detalleRepuesto.controller.js';

const ordenesRoutes = express.Router();

//RUTA CREAR ORDEN
ordenesRoutes.post('/crear', crearOrdenController);

//RUTA VER ORDENES FINALIZADAS
ordenesRoutes.get('/filtrar', filtrarOrdenesVerCantidad);

//RUTA DETALLE DEL SERVICIO
ordenesRoutes.post('/crear/detalle',crearDetalleServicioController);

//RUTA VER TODOS LOS DETALLES DEL SERVICIO
ordenesRoutes.get('/',/*AGREGAR HANDLER DE LOS DETALLES DEL SERVICIOS*/);

//RUTA DETALLE DEL REPUESTO 
ordenesRoutes.post('/crear/detalle/repuestos', crearDetalleRepuestoController);

//RUTA CAMBIO DE ESTADO DE ORDEN
ordenesRoutes.patch('/:id', cambiarEstadoController);

//RUTA CONSULTAR ORDEN
ordenesRoutes.get('/:id', consultarOrdenController);

//RUTA CANCELAR ORDEN
ordenesRoutes.patch('/:id', cancelarOrdenVehiculoController);

ordenesRoutes.patch('/quitar/detalle/repuesto/:id', quitarRepuestoDelDetalle);

export default ordenesRoutes;