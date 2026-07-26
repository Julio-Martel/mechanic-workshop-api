import express from 'express';
import { Router } from 'express';
import { registroController } from '../controllers/cliente.controller.js';

const clienteRoutes = express.Router();

clienteRoutes.post('/registro', registroController);

export default clienteRoutes;