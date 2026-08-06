import express from 'express';
import { registroMecanicoController, modificacionDatosMecanicoController } from '../controllers/mecanicos.controllers.js';

const mecanicosRoutes = express.Router();

//RUTA DE REGISTRO DE MECANICOS
mecanicosRoutes.post('/registro', registroMecanicoController);

//RUTA DE MODIFICACION DE DATOS DEL MECANICO
mecanicosRoutes.patch('/:id',modificacionDatosMecanicoController);

//RUTA DE ELIMINACION DE MECANICOS
mecanicosRoutes.delete('/:id', /*AGREGAR HANDLER CONTROLADOR DE ELIMINACION DE MECANICOS*/);



export default mecanicosRoutes;

