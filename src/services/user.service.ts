import { UserDetails } from '../types/employee';
import serviceDef from '../connection/connection';

export function GetUser(userName): Promise<any> {
  const sql = `SELECT * FROM User WHERE userName = '${userName}'`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error, results, fields) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}

export function AddUser(user: UserDetails) {
  const { userName, email, password } = user;
  // eslint-disable-next-line max-len
  const sql = `INSERT INTO User (userName, email, password) VALUES ('${userName}', '${email}', '${password}')`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
