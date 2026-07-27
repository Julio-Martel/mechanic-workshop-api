import express from 'express';
import { Router } from 'express';
import { registroController } from '../controllers/registro.controller.js';

const registroRoute = express.Router();

registroRoute.post('/', registroController);

export default registroRoute;