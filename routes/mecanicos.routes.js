import express from 'express';
import { registroMecanicoController, modificacionDatosMecanicoController } from '../controllers/mecanicos.controllers.js';

const mecanicosRoutes = express.Router();

//RUTA DE REGISTRO DE MECANICOS
mecanicosRoutes.post('/registro', registroMecanicoController);

//RUTA DE MODIFICACION DE DATOS DEL MECANICO
mecanicosRoutes.patch('/modificacion',modificacionDatosMecanicoController);



export default mecanicosRoutes;

