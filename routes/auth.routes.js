import express from 'express';
import { registroController, loginController } from '../controllers/registro.js';

const authRoutes = express.Router();

authRoutes.post('/registro', registroController);
authRoutes.post('/login', loginController);


export default authRoutes;

