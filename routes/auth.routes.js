import express from 'express';
import { registroController } from '../controllers/registro.js';

const authRoutes = express.Router();

authRoutes.post('/registro', registroController);
authRoutes.post('/login', /*AGREGAR HANDLER DE LOGIN*/);


export default authRoutes;

