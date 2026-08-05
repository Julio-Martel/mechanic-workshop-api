import db from '../config/db.js';

const encontrarMecanicoModel = async(tel) => {
    const [resultado] = await db.query(`SELECT * FROM Mecanicos 
        WHERE telefono = ?`,[tel]);
    
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

export {
    encontrarMecanicoModel,
    registroMecanicoModel
}