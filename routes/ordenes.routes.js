import express from 'express';
import { crearOrdenController,
        cambiarEstadoController,
        consultarOrdenController
 } from '../controllers/ordenes.controllers.js';

const ordenesRoutes = express.Router();

//RUTA CREAR ORDEN
ordenesRoutes.post('/crear', crearOrdenController);

//RUTA CAMBIO DE ESTADO DE ORDEN
ordenesRoutes.path('/:id', cambiarEstadoController);

//RUTA CONSULTAR ORDEN
ordenesRoutes.get('/:id', consultarOrdenController);

//RUTA CANCELAR ORDEN
ordenesRoutes.patch('/:id', /*AGREGAR HANDLER DE CANCELACION DE ORDEN*/);

export default ordenesRoutes;