import db from '../config/db.js';

const verificarClientePorDni = async(dni) => {
    const [resultado] = await db.query(`SELECT * FROM Clientes 
        WHERE dni = ?`,[dni]);

    return resultado[0];
}

const registrarCliente = async(data) => {
    const [resultado] = await db.query(`INSERT INTO Clientes(nombre,apellido,dni,telefono,email)
        VALUES(?,?,?,?,?)`,
        [data.nombre,
         data.apellido,
         data.dni,
         data.telefono,
         data.email]);
}

export {
    verificarClientePorDni,
    registrarCliente
}