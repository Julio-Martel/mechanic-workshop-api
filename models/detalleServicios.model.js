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


export {
    crearDetalleServicio,
    serviciosAsociadosAUnaOrden,
    totalDeServicios
}