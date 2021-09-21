import config from "../config/index";

const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: config.mysql.connectionLimit,
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
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
