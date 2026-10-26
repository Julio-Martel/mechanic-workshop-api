import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


import clientesRoutes from './routes/clientes.routes.js';
import vehiculosRoutes from './routes/vehiculos.routes.js';
import mecanicosRoutes from './routes/mecanicos.routes.js';
import servicioRoutes from './routes/servicios.routes.js';
import repuestosRoutes from './routes/repuestos.routes.js';
import ordenesRoutes from './routes/ordenes.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

// RUTA REGISTRO O INICIO SESION
app.use('/auth', authRoutes);

//RUTA CRUD DE CLIENTES
app.use('/clientes', clientesRoutes);

//RUTA CRUD DE VEHICULOS
app.use('/vehiculos', vehiculosRoutes);

//RUTA CRUD DE MECANICOS
app.use('/mecanicos', mecanicosRoutes);

//RUTA CRUD SERVICIOS
app.use('/servicios', servicioRoutes);

//RUTA CRUD REPUESTOS
app.use('/repuestos', repuestosRoutes);

//RUTA ORDENES
app.use('/ordenes', ordenesRoutes);

export default app;
