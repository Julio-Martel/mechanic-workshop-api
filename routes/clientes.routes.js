import express from 'express'; 
import { registroController, modificarController, 
         eliminarController, consultarController,
        obtenerTodosLosClientesController } from '../controllers/cliente.controller.js';
import { autorizarAccesoCliente } from '../middlewares/autorizacion.middleware.js';
import { autenticarToken } from '../middlewares/autenticacion.middleware.js';

const clientesRoutes = express.Router();

//CONSULTAR CLIENTE 
clientesRoutes.get('/:id', autenticarToken, autorizarAccesoCliente, consultarController);

//OBTENER TODOS LOS CLIENTES
clientesRoutes.get('/', autenticarToken, autorizarAccesoCliente, obtenerTodosLosClientesController);

//ACTUALIZAR CLIENTE
clientesRoutes.patch('/actualizar/:id', modificarController);

//BORRAR CLIENTE
clientesRoutes.delete('/:id', eliminarController);

export default clientesRoutes;