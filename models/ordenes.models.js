import db from '../config/db.js';

const crearOrdenModel = async(data) => {
    const [resultado] = await db.query(`INSERT INTO Orden(id_vehiculo, id_mecanico, fecha_ingreso, fecha_entrega, estado)
        VALUES(?,?,?,?,?)`,[data.id_mecanico, data.id_vehiculo, data.fecha_ingreso, data.fecha_entrega, data.estado]);

    return resultado.affectedRows;
}

export {
    crearOrdenModel
}