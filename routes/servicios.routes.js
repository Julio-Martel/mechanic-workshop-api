import express from 'express';
import { crearServicioController, 
         modificacionSerivicioController,
         eliminarServicioController,
         listarServiciosController } from '../controllers/servicios.controllers.js';

const servicioRoutes = express.Router();

//RUTA CREACION DE SERVICIO
servicioRoutes.post('/',crearServicioController);

//RUTA EDICION DE SERVICIOS
servicioRoutes.post('/modificacion/:id',modificacionSerivicioController);

//RUTA ELIMINACION DE SERVICIOS
servicioRoutes.delete('/:id', eliminarServicioController);

//RUTA LISTER SERVICIOS
servicioRoutes.get('/', listarServiciosController);

export default servicioRoutes;