import express from 'express';
import registroRoute from './routes/registro.route.js';

const app = express();

app.use(express.json());

//REGISTRO DE CLIENTES
app.use('/registro', registroRoute);

export default app;