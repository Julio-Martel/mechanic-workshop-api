import express from 'express';
import clientesRoutes from './routes/clientes.routes.js';
import vehiculosRoutes from './routes/vehiculos.routes.js';
import mecanicosRoutes from './routes/mecanicos.routes.js';
import servicioRoutes from './routes/servicios.routes.js';

const app = express();

app.use(express.json());

//RUTA CRUD DE CLIENTES
app.use('/clientes', clientesRoutes);

//RUTA CRUD DE VEHICULOS
app.use('/vehiculos', vehiculosRoutes);

//RUTA CRUD DE MECANICOS
app.use('/mecanicos', mecanicosRoutes);

//RUTA CRUD SERVICIOS
app.use('/servicios', servicioRoutes);

//RUTA CRUD REPUESTOS
app.use('/repuestos', /*AGREGAR HANDLER DE RUTAS*/);

export default app;