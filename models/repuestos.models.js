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


export {
    registrarRepuestoModel,
    encontrarRepuestoPorNombre,
    eliminarRepuestoModel,
    actualizarStockModel,
    repuestosDispModel
}