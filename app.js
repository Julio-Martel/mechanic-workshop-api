import express from 'express';
import clientesRoutes from './routes/clientes.routes.js';
import vehiculosRoutes from './routes/vehiculos.routes.js';

const app = express();

app.use(express.json());

//RUTA CRUD DE CLIENTES
app.use('/clientes', clientesRoutes);

//RUTA CRUD DE VEHICULOS
app.use('/vehiculos', vehiculosRoutes);

//RUTA CRUD DE MECANICOS
app.use('/mecanicos', /*HANDLER RUTA DE MECANICOS*/)

export default app;