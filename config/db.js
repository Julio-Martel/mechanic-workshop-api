import mysql from 'mysql2';

const pool = mysql.createPool(
    {   host: "localhost",
        user: "root",
        password: "Climax4561@",
        database: "taller_mecanico"
    }
);

export default pool.promise();