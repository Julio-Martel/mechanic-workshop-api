import express from 'express';
import registroRoute from './routes/registro.route.js';
import modificacionRoute from './routes/modificar.route.js';

const app = express();

app.use(express.json());

//REGISTRO DE CLIENTES
app.use('/registro', registroRoute);

//MODIFICACION DE CLIENTES
app.use('/modificar', modificacionRoute);


export default app;