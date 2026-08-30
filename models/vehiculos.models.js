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

const verificarVehiculoModel = async(id) => {
    const [resultado] = await db.query(`SELECT * FROM Vehiculos
        WHERE id = ?`,[id]);
    
    return resultado[0];
}

const ordenesAsociadasAVehiculo = async(id_vehiculo) => {
    const [resultados] = await db.query(`SELECT COUNT(*) AS Total FROM Orden
        WHERE id_vehiculo = ?`,
        [id_vehiculo]);

    return resultados[0].Total;
}


export {
    registroVehiculoModel,
    modificacionVehiculoModel,
    eliminacionVehiculoModel,
    consultaVehiculosPorClienteModel,
    verificarVehiculoModel,
    ordenesAsociadasAVehiculo
}

