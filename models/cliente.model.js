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

const verificarClientePorDni = async(dni,email) => {
    const [resultado] = await db.query(`SELECT * FROM Clientes 
        WHERE dni = ? AND email = ?`,[dni,email]);

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

const consultarCliente = async(id) => {
    const [resultado] = await db.query(`SELECT * FROM Clientes
        WHERE id = ?`,[id]);

    return resultado[0];
}

const todosLosClientes = async() => {
    const [resultados] = await db.query(`SELECT * FROM Clientes`);
    
    return resultados;
}

const vehiculosRegistradosDeUnCliente = async(id_cliente) => {
    const [resultados] = await db.query(`SELECT COUNT(*) AS Total FROM Vehiculos
        WHERE id_cliente = ?`,
        [id_cliente]);

    return resultados[0].Total;
}


export {
    encontrarCliente,
    verificarClientePorDni,
    registrarCliente,
    modificarCliente,
    eliminarCliente,
    consultarCliente,
    todosLosClientes,
    vehiculosRegistradosDeUnCliente
}