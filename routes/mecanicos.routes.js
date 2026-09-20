import express from 'express';
import { registroMecanicoController, 
        modificacionDatosMecanicoController,
        borrarMecanicoController,
        todosLosMecanicosController,
        totalReparacionesPorMecanicoController 
} from '../controllers/mecanicos.controllers.js';

const mecanicosRoutes = express.Router();

//RUTA DE OBTENCION DE TODOS LOS MECANICOS
//mecanicosRoutes.get('/', todosLosMecanicosController);

//RUTA DE REGISTRO DE MECANICOS
//mecanicosRoutes.post('/registro', registroMecanicoController);

//RUTA DE OBTECION DEL TOTAL DE REPACION DE CADA MECANICO
mecanicosRoutes.get('/totales/reparaciones', totalReparacionesPorMecanicoController);

//RUTA DE MODIFICACION DE DATOS DEL MECANICO
//mecanicosRoutes.patch('/:id',modificacionDatosMecanicoController);

//RUTA DE ELIMINACION DE MECANICOS
//mecanicosRoutes.delete('/:id', borrarMecanicoController);

export default mecanicosRoutes;

