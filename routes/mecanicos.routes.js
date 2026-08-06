import express from 'express';
import { registroMecanicoController } from '../controllers/mecanicos.controllers.js';

const mecanicosRoutes = express.Router();

//RUTA DE REGISTRO DE MECANICOS
mecanicosRoutes.post('/registro', registroMecanicoController);




export default mecanicosRoutes;

