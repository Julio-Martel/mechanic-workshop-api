import express from 'express';

const ordenesRoutes = express.Router();

//RUTA CREAR ORDEN
ordenesRoutes.post('/crear', /*AGREGAR HANDLER DE CREACION DE ORDEN*/);

//RUTA ASIGNACION VEHICULO
ordenesRoutes.post('/asignarVehiculo', /*AGREGAR HANDLER DE ASIGNACION DE VEHICULO*/);

//RUTA ASIGNACION MECANICO
ordenesRoutes.post('/asignarMecanico', /*AGREGAR HANDLER DE ASIGNACION DE */)

//RUTA CAMBIO DE ESTADO DE ORDEN
ordenesRoutes.path('/cambiar', /*AGREGAR HANDLER DE CAMBIO DE ESTADO*/);

//RUTA CONSULTAR ORDEN
ordenesRoutes.get('/:id', /*AGREGAR HANDLER DE CONSULTA DE ORDEN*/);

//RUTA CANCELAR ORDEN
ordenesRoutes.patch('/:id', /*AGREGAR HANDLER DE CANCELACION DE ORDEN*/);

export default ordenesRoutes;