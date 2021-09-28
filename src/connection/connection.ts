import * as dotenv from 'dotenv';

dotenv.config();
const mysql = require('mysql');


const pool = mysql.createPool({
  connectionLimit: process.env.CONNECTION_LIMIT,
  host: process.env.HOST,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

// Connect to Data Base
function dbConnection() {
  return new Promise((resolve, reject) => {
    resolve(pool);
  });
}
const serviceDef = {
  dbConnection,
};

export default serviceDef;
