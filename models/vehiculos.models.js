import db from '../config/db.js';

const registroVehiculoModel = async(data) => {
    const [resultado] = await db.query(`INSERT INTO Vehiculos(id_cliente,marca,anio,patente,color)
        VALUES(?,?,?,?,?)`,[
            data.id_cliente,
            data.marca,
            data.anio,
            data.patente,
            data.color
        ]);

    return resultado[0];
}

const modificacionVehiculoModel = async(id,data) => {
    const [resultado] = await db.query(`UPDATE Vehiculos SET ? 
        WHERE id = ?`,[id,data]);

    return resultado[0];
}

const eliminacionVehiculoModel = async(id) => {
    const [resultado] = await db.query(`DELETE FROM Vehiculos WHERE 
        id = ?`,[id]);

    return resultado[0];
}

const consultaVehiculosPorClienteModel = async(id) => {
    const [resultados] = await db.query(`SELECT * FROM Vehiculos 
        WHERE id_cliente = ?`,[id]);

    return resultados;
}

export {
    registroVehiculoModel,
    modificacionVehiculoModel,
    eliminacionVehiculoModel,
    consultaVehiculosPorClienteModel
}

