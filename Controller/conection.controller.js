import mysql from "mysql2";
import dotenv from "dotenv";

// "Importacion" de Varibles de entorno
dotenv.config({ path: "../" });

const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
);

db.connect((err) => {
    if (err) {
        console.error("Error al conectar la base de datos");
        return;
    }
    console.log("Conexion Exitosa");
});

export function queryAsync(sql, options) {
    return new Promise(
        (resolve, reject) => {
            db.query(sql, options, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        }
    );
}