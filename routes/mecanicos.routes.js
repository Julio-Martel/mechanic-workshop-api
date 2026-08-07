import express from 'express';
import { registroMecanicoController, 
        modificacionDatosMecanicoController,
        borrarMecanicoController } from '../controllers/mecanicos.controllers.js';

const mecanicosRoutes = express.Router();

//RUTA DE REGISTRO DE MECANICOS
mecanicosRoutes.post('/registro', registroMecanicoController);

//RUTA DE MODIFICACION DE DATOS DEL MECANICO
mecanicosRoutes.patch('/:id',modificacionDatosMecanicoController);

//RUTA DE ELIMINACION DE MECANICOS
mecanicosRoutes.delete('/:id', borrarMecanicoController);

mecanicosRoutes.get('/', /*AGREGAR HANDLER DE OBTENER TODOS LOS MECANICOS*/)

export default mecanicosRoutes;

