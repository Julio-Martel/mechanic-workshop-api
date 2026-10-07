import express from 'express';

const authRoutes = express.Router();

authRoutes.post('/registro', /*AGREGAR HANDLER DE REGISTRO*/);
authRoutes.post('/login', /*AGREGAR HANDLER DE LOGIN*/);


export default authRoutes;

