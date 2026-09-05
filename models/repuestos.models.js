import db from '../config/db.js';

const registrarRepuestoModel = async(data) => {
    const [resultados] = await db.query(`INSERT INTO Repuestos(nombre,stock,precio_unitario)
        VALUES(?,?,?)`,[
            data.nombre,
            data.stock,
            data.precio_unitario
        ]);

    return resultados.insertId;
}

const encontrarRepuestoPorNombre = async(data) => {
    const [resultados] = await db.query(`SELECT * FROM Repuestos
        WHERE nombre = ?`,[data.nombre]);

    return resultados[0];
}

const eliminarRepuestoModel = async(id) => {
    const [resultado] = await db.query(`DELETE FROM Repuestos
        WHERE id = ?`,[id]);

    return resultado.affectedRows;
}

const actualizarStockModel = async(id,cantidad) => {
    const [resultado] = await db.query(`UPDATE Repuestos
        SET stock = stock + ?
        WHERE id = ?`,
        [cantidad,id]);

    return resultado.affectedRows;
}

const repuestosDispModel = async(fil) => {

    const [resultados] = await db.query(fil);
    
    return resultados;
}

const encontrarRepuestoPorId = async(conexion,id) => {
    const [resultado] = await conexion.query(`SELECT * FROM Repuestos
        WHERE id = ?`,
        [id]);
 
    return resultado[0];
}

const descontarStockRepuesto = async(conexion,id_repuesto, cantidad) => {
    const [resultado] = await conexion.query(`UPDATE Repuestos
        SET stock = stock - ? 
        WHERE id = ? AND stock >= ?`,
    [cantidad, 
     id_repuesto,
     cantidad]);

    return resultado;
}

const repuestosAsociadosAUnaOrden = async(id_repuesto) => {
    const [resultado] = await db.query(`SELECT COUNT(*) AS Total FROM DetalleRepuesto
        WHERE id_repuesto = ?`,
    [id_repuesto]);

    return resultado[0].Total;
}

export {
    registrarRepuestoModel,
    encontrarRepuestoPorNombre,
    eliminarRepuestoModel,
    actualizarStockModel,
    repuestosDispModel,
    encontrarRepuestoPorId,
    descontarStockRepuesto,
    repuestosAsociadosAUnaOrden
}