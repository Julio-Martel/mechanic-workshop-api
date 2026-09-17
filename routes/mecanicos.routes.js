import express from 'express';
import { registroMecanicoController, 
        modificacionDatosMecanicoController,
        borrarMecanicoController,
        todosLosMecanicosController,
totalReparacionesPorMecanico } from '../controllers/mecanicos.controllers.js';
import { totalDeReparacionesPorMecanico } from '../models/detalleServicios.model.js';

const mecanicosRoutes = express.Router();

//RUTA DE REGISTRO DE MECANICOS
mecanicosRoutes.post('/registro', registroMecanicoController);

//RUTA DE MODIFICACION DE DATOS DEL MECANICO
mecanicosRoutes.patch('/:id',modificacionDatosMecanicoController);

//RUTA DE ELIMINACION DE MECANICOS
mecanicosRoutes.delete('/:id', borrarMecanicoController);

//RUTA DE OBTENCION DE TODOS LOS MECANICOS
mecanicosRoutes.get('/', todosLosMecanicosController);

//RUTA DE OBTECION DEL TOTAL DE REPACION DE CADA MECANICO
mecanicosRoutes.get('/totales', totalDeReparacionesPorMecanico);

export default mecanicosRoutes;

