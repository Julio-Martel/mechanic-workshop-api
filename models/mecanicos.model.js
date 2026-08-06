import db from '../config/db.js';

const encontrarMecanicoModel = async(tel) => {
    const [resultado] = await db.query(`SELECT * FROM Mecanicos 
        WHERE telefono = ?`,[tel]);
    
    return resultado[0];
}

const encontrarMecanicoPorId = async(id) => {
    const [resultado] = await db.query(`SELECT * FROM Mecanicos
        WHERE id = ?`,[id]);
    
    return resultado[0];
}

const registroMecanicoModel = async(data) => {
    const [resultado] = await db.query(`INSERT INTO Mecanicos(nombre,especialidad,telefono,fecha_ingreso)
        VALUES(?,?,?,?)`,
        [data.nombre,
         data.especialidad,
         data.telefono,
         data.fecha_ingreso
        ]);

    return resultado[0];
}

const modificacionDatosMecanicoModel = async(id,data) => {
    const [resultado] = await db.query(`UPDATE Mecanicos SET ? 
        WHERE id = ?`,[data,id]);
    
    return resultado[0];
}

const borrarMecanicoModel = async(id) => {
    const [resultado] = await db.query(`DELETE FROM Mecanicos 
        WHERE id = ?`,[id]);

    return resultado[0];
}

export {
    encontrarMecanicoModel,
    encontrarMecanicoPorId,
    registroMecanicoModel,
    modificacionDatosMecanicoModel,
    borrarMecanicoModel
}