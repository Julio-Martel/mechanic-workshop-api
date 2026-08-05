import express from 'express';
import { registroMecanicoController } from '../controllers/mecanicos.controllers.js';

const mecanicosRoutes = express.Router();

mecanicosRoutes.post('/registro', registroMecanicoController);




export default mecanicosRoutes;

