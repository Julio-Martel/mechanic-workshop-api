import express from 'express';
import { registroMecanicoController } from '../controllers/mecanicos.controllers.js';

const mecanicosRoutes = express.Router();

//RUTA DE REGISTRO DE MECANICOS
mecanicosRoutes.post('/registro', registroMecanicoController);

//RUTA DE MODIFICACION DE DATOS DEL MECANICO
mecanicosRoutes.patch('/modificacion',/*AGREGAR HANDLER DE MODIFICACION DE DATOS*/)



export default mecanicosRoutes;

