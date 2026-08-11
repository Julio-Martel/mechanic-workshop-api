import db from '../config/db.js';

const crearServicioModel = async(data) => {
    const [resultado] = await db.query(`INSERT INTO Servicios(nombre,descripcion,precio)
        VALUES(?,?,?)`,
        [ data.nombre,
          data.descripcion,
          data.precio]);

    return resultado.insertId;
}

const servicioDuplicadoPorDescripcion = async(titulo) => {
    const [resultado] = await db.query(`SELECT * FROM Servicios 
        WHERE nombre = ?`,[titulo]);

    return resultado[0];
};

const encontrarServicioPorId = async(id) => {
    const [resultado] = await db.query(`SELECT * FROM Servicios
        WHERE id = ?`,[id]);
    
    return resultado[0];
}

const modificacionSerivicioModel = async(data,id) => {
    const [resultado] = await db.query(`UPDATE Servicios SET ? 
        WHERE id = ?`,[data,id]);

    return resultado;
}


const servicioDuplicadoPorNombre = async(data) => {
    const [resultado] = await db.query(`SELECT * FROM Servicios
        WHERE NOMBRE = ?`,[data]);

    return resultado[0];
}

const eliminarServicioModel = async(id) => {
    const [resultado] = await db.query(`DELETE FROM Servicios 
        WHERE id = ?`,[id]);
    
    return resultado;
}


export {
    crearServicioModel,
    servicioDuplicadoPorDescripcion,
    encontrarServicioPorId,
    modificacionSerivicioModel,
    servicioDuplicadoPorNombre,
    eliminarServicioModel
}