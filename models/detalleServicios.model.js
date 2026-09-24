import db from '../config/db.js';

const crearDetalleServicio = async(data) => {
    const [resultado] = await db.query(`INSERT INTO Detalle(id_orden, id_servicio, precio_aplicado)
        VALUES(?,?,?)`,
    [ data.id_orden,
      data.id_servicio,
      data.precio_aplicado
    ]); 

    return resultado.affectedRows;
}

const todosLosDetallesServiciosModel = async() => {
    const [resultados] = await db.query(`SELECT * FROM Detalles`);

    return resultados[0];
}

const serviciosAsociadosAUnaOrden = async(id_orden) => {
    const [resultados] = await db.query(`SELECT COUNT(*) AS total FROM Detalle
        WHERE id_orden = ?`,
    [id_orden]);

    return resultados[0].total;
}

const totalDeServicios = async(id_orden) => {
    const [resultado] = await db.query(`SELECT SUM(precio_aplicado)
        AS Total FROM Detalle WHERE id_orden = ?`,
        [id_orden]);

    return resultado[0].Total;
}

const todosLosDetallesServicio = async() => {
    const [resultados] = await db.query(`SELECT * FROM Detalle`);

    return resultados[0];
}

const totalDeReparacionesPorMecanico = async(id_mecanico) => {
    const [resultado] = await db.query(`SELECT COUNT(*) AS Total
        FROM Orden WHERE id_mecanico = ? AND estado = ?`,
        [id_mecanico, 'en reparacion']
    );

    return resultado[0].Total;
}

const agruparServiciosPorVecesUtilizadosModels = async() => {
    const [resultados] = db.query(`SELECT id_servicio, COUNT(*) AS Cantidad
        FROM Detalle GROUP BY id_servicio`
    );

    resultados[0].Cantidad;
}


export {
    crearDetalleServicio,
    serviciosAsociadosAUnaOrden,
    totalDeServicios,
    todosLosDetallesServicio,
    totalDeReparacionesPorMecanico,
    agruparServiciosPorVecesUtilizadosModels
}  

