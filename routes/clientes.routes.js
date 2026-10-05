import express from 'express'; 
import { registroController, modificarController, 
         eliminarController, consultarController,
        obtenerTodosLosClientesController } from '../controllers/cliente.controller.js';

const clientesRoutes = express.Router();

//CONSULTAR CLIENTE 
clientesRoutes.get('/:id', consultarController);

//OBTENER TODOS LOS CLIENTES
clientesRoutes.get('/',obtenerTodosLosClientesController);

//REGISTRAR CLIENTE
clientesRoutes.post('/registro', registroController);

//ACTUALIZAR CLIENTE
clientesRoutes.patch('/actualizar/:id', modificarController);

//BORRAR CLIENTE
clientesRoutes.delete('/:id', eliminarController);

export default clientesRoutes;