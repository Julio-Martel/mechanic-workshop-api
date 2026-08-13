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


export {
    registrarRepuestoModel
}