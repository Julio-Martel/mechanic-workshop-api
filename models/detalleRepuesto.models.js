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



export {
    crearDetalleRepuestoModel
}