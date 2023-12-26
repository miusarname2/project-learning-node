import mysql from "mysql2";
import dotenv from "dotenv";

// "Importacion" de Varibles de entorno
dotenv.config("../")
console.log(process.env.DB_USER)

const connection = mysql.createConnection({
    host: 'b27eti4atof1lhferfiu-mysql.services.clever-cloud.com',
    user: 'uvx0ggvw0puqgmbf',
    password: '800eyoeHLoZkRSDssGTe',
    database: 'b27eti4atof1lhferfiu'
  });
  
  // Establecer la conexión
  connection.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err);
      return;
    }
    console.log('Conexión a la base de datos establecida');
});

export function queryAsync(sql, options) {
    return new Promise(
        (resolve, reject) => {
            mysql.query(sql, options, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        }
    );
}