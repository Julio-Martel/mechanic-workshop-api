import db from '../config/db.js';

const crearOrdenModel = async(data) => {
    const [resultado] = await db.query(`INSERT INTO Orden(id_vehiculo, id_mecanico, fecha_ingreso, fecha_entrega, estado)
        VALUES(?,?,?,?,?)`,[data.id_mecanico, data.id_vehiculo, data.fecha_ingreso, data.fecha_entrega, data.estado]);

    return resultado;
}

const verificarOrdenCanceladaFinalizadaModel = async(id) => {
    const [resultado] = await db.query(`SELECT * FROM Orden 
        WHERE id = ? AND estado = ? || estado = ?`,['finalizada', 'cancelada']);

    return resultado[0];
}

const cambiarEstadoModel = async(id,data) => {
    const [resultado] = await db.query(`UPDATE Orden 
        SET estado = ? WHERE id = ? AND estado = '?'`,
        [data.estado,
         id,
         'pendiente']);

    return resultado.affectedRows;
}

const consultarOrdenModel = async(id) => {
    const [resultado] = await db.query(`SELECT * FROM Orden
        WHERE id = ?`,[id]);

    return resultado[0];
}

const cancelarOrdenModel = async(id) => {
    const [resultado] = await db.query(`UPDATE Orden 
        SET estado = ? 
        WHERE id = ? AND estado = ? OR estado = ?`,
        ['cancelada', 
          id, 
          'en reparacion', 
          'pendiente'
        ]);

    return resultado.affectedRows;
}


export {
    crearOrdenModel,
    verificarOrdenCanceladaFinalizadaModel,
    cambiarEstadoModel,
    consultarOrdenModel,
    cancelarOrdenModel
}