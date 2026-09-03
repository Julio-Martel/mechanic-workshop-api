import db from '../config/db.js';

const crearDetalleRepuestoModel = async(data) => {
    const [resultado] = await db.query(`INSERT INTO DetalleRepuesto(id_orden, id_repuesto, cantidad)
        VALUES(?,?,?)`,[
            data.id_orden,
            data.id_repuesto,
            data.cantidad
        ]);

    return resultado.affectedRows;
}

const totaDeRepuestos = async(id_orden) => {
    const [resultado]  = await db.query(`SELECT SUM(d.cantidad * r.precio_unitario) AS Total
        FROM DetalleRepuesto d JOIN Repuestos r ON d.id_repuesto = r.id
        WHERE d.id_orden = ?`,
        [id_orden]);

    return resultado[0].Total;
}

export {
    crearDetalleRepuestoModel,
    totaDeRepuestos
}