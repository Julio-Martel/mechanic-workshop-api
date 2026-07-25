import express from 'express';
import clienteRoutes from './routes/cliente.routes.js';

const app = express();

app.use(express.json());

//RUTA CLIENTE
clienteRoutes.use('/clientes', clienteRoutes);

export default app;