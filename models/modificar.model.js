import db from '../config/db.js';

const encontrarCliente = async(id) => {
    const [resultado] = await db.query(`SELECT * FROM Clientes 
        WHERE id = ?`,[id]);

    return resultado[0];
}

const modificarCliente = async(data,id) => {
    const [resultado] = await db.query(`UPDATE Clientes SET ? WHERE id = ?`,[data,id]);

    return resultado;

}

export {
    encontrarCliente,
    modificarCliente
}