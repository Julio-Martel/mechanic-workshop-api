import db from '../config/db.js';

const crearOrdenModel = async(data) => {
    const [resultado] = await db.query(`INSERT INTO Orden(id_vehiculo, id_mecanico, fecha_entrega, estado)
        VALUES(?,?,?,?)`,[ data.id_vehiculo,data.id_mecanico, data.fecha_entrega, data.estado]);

    return resultado;
}

const verificarOrdenCanceladaFinalizadaModel = async(id) => {
    const [resultado] = await db.query(`SELECT * FROM Orden 
        WHERE id = ? 
        AND 
        estado IN(?,?)`,
        [  id,
          'finalizada', 
          'cancelada'
        ]);

    return resultado[0];
}

const cambiarEstadoModel = async(id,data) => {
    const [resultado] = await db.query(`UPDATE Orden 
        SET estado = ? WHERE id = ? AND estado = ?`,
        [data.estado,
         id,
         'pendiente']);

    return resultado.affectedRows;
}

const consultarOrdenModel = async(conexion,id) => {
    const [resultado] = await conexion.query(`SELECT * FROM Orden
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

const comprobarDuplicadoOrdenVehiculo = async(id_vehiculo) => {
     const [resultado] = await db.query(`SELECT * FROM Orden WHERE 
        id_vehiculo = ? AND estado IN(?,?)`,
        [ id_vehiculo, 
          'en reparacion', 
          'pendiente'
        ]);

    return resultado[0];
}

const limiteOrdenes = async (id_mecanico) => {
    const [limite] = await db.query(`
        SELECT COUNT(*) AS total
        FROM Orden
        WHERE id_mecanico = ? 
        AND estado IN (?, ?)
    `, [
        id_mecanico,
        'pendiente',
        'en reparacion'
    ]);

    return limite[0].total;
}

const totalOrdenes = async() => {
    const [resultado] = await db.query(`SELECT COUNT(*) AS Total FROM Orden`);

    return resultado[0].Total;
}

const cantidadTotalOrdenesFiltradas = async(estado) => {

    const [resultado] = await db.query(`SELECT COUNT(*) AS Total FROM Orden
        WHERE estado = ?`,
        [estado]);

    return resultado[0].Total;
}

export {
    crearOrdenModel,
    verificarOrdenCanceladaFinalizadaModel,
    cambiarEstadoModel,
    consultarOrdenModel,
    cancelarOrdenModel,
    comprobarDuplicadoOrdenVehiculo,
    limiteOrdenes,
    cantidadTotalOrdenesFiltradas,
    totalOrdenes
}