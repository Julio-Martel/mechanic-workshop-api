import express from 'express';
import { crearServicioController, modificacionSerivicioController } from '../controllers/servicios.controllers.js';

const servicioRoutes = express.Router();

//RUTA CREACION DE SERVICIO
servicioRoutes.post('/',crearServicioController);

//RUTA EDICION DE SERVICIOS
servicioRoutes.post('/:id',modificacionSerivicioController);



export default servicioRoutes;