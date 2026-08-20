import express from 'express';
import { crearOrdenController } from '../controllers/ordenes.controllers.js';

const ordenesRoutes = express.Router();

//RUTA CREAR ORDEN
ordenesRoutes.post('/crear', crearOrdenController);

//RUTA CAMBIO DE ESTADO DE ORDEN
ordenesRoutes.path('/cambiar', /*AGREGAR HANDLER DE CAMBIO DE ESTADO*/);

//RUTA CONSULTAR ORDEN
ordenesRoutes.get('/:id', /*AGREGAR HANDLER DE CONSULTA DE ORDEN*/);

//RUTA CANCELAR ORDEN
ordenesRoutes.patch('/:id', /*AGREGAR HANDLER DE CANCELACION DE ORDEN*/);

export default ordenesRoutes;