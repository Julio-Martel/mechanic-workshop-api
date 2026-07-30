import db from '../config/db.js';

const registrarCliente = async(data) => {
    const [resultado] = await db.query(`INSERT INTO Clientes(nombre,apellido,dni,telefono,email)
        VALUES(?,?,?,?,?)`,
        [data.nombre,
         data.apellido,
         data.dni,
         data.telefono,
         data.email]);

    return resultado[0];
}

const verificarClientePorDni = async(dni) => {
    const [resultado] = await db.query(`SELECT * FROM Clientes 
        WHERE dni = ?`,[dni]);

    return resultado[0];
}

const encontrarCliente = async(id) => {
    const [resultado] = await db.query(`SELECT * FROM Clientes 
        WHERE id = ?`,[id]);

    return resultado[0];
}

const modificarCliente = async(data,id) => {
    const [resultado] = await db.query(`UPDATE Clientes SET ? 
        WHERE id = ?`,[data,id]);

    return resultado;
}

const eliminarCliente = async(id) => {
    const [resultado] = await db.query(`DELETE FROM Clientes 
        WHERE id = ?`,[id]);

    return resultado;
}

export {
    encontrarCliente,
    verificarClientePorDni,
    registrarCliente,
    modificarCliente,
    eliminarCliente
}