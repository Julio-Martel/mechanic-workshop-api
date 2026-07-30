import express from 'express';
import clientesRoutes from './routes/clientes.routes.js';

const app = express();

app.use(express.json());

//RUTA CRUD DE CLIENTES
app.use('/clientes', clientesRoutes);


export default app;