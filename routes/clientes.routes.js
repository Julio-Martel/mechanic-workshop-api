import express from 'express'; 
import { modificarController, 
         eliminarController, consultarController,
        obtenerTodosLosClientesController } from '../controllers/cliente.controller.js';
import { autorizarAccesoCliente, autorizarAccesoAdmin } from '../middlewares/autorizacion.middleware.js';
import { autenticarToken } from '../middlewares/autenticacion.middleware.js';

const clientesRoutes = express.Router();

//CONSULTAR CLIENTE 
clientesRoutes.get('/:id', autenticarToken, autorizarAccesoCliente, consultarController);

//OBTENER TODOS LOS CLIENTES
clientesRoutes.get('/', autenticarToken, autorizarAccesoCliente,  obtenerTodosLosClientesController);

//ACTUALIZAR CLIENTE
clientesRoutes.patch('/actualizar/:id', autenticarToken, autorizarAccesoCliente, modificarController);

//BORRAR CLIENTE
clientesRoutes.delete('/:id', autenticarToken, autorizarAccesoAdmin, eliminarController);

export default clientesRoutes;

/*
        RUTAS DE CLIENTES 

*/