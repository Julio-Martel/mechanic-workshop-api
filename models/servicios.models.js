import db from '../config/db.js';

const crearServicioModel = async(data) => {
    const [resultado] = db.query(`INSERT INTO Servicios(nombre,descripcion,precio)
        VALUES(?,?,?)`,
        [ data.nombre,
          data.descripcion,
          data.precio]);

    return resultado;
}

const servicioDuplicadoPorDescripcion = async(titulo) => {
    const [resultado] = await db.query(`SELECT * FROM Servicios 
        WHERE nombre = ?`,[titulo]);

    return resultado[0];
};

export {
    crearServicioModel,
    servicioDuplicadoPorDescripcion
}