import express from 'express'; 
import { registroController } from '../controllers/registro.controller.js';
import { modificarController } from '../controllers/modificar.controller.js';

const clientesRoutes = express.Router();

//REGISTRAR CLIENTE
clientesRoutes.post('/registro', registroController);

// ACTUALIZAR CLIENTE
clientesRoutes.patch('/actualizar/:id', modificarController);

//BORRAR CLIENTE
clientesRoutes.delete('/:id');


export default clientesRoutes;