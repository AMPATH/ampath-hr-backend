import * as bcrypt from 'bcryptjs';
import { UserDetails } from '../types/employee';
import serviceDef from '../connection/connection';

export function GetUser(userName, password): Promise<any> {
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
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  // eslint-disable-next-line max-len
  const sql = `INSERT INTO User (userName, email, password, role) VALUES ('${userName}', '${email}', '${hashedPassword}', 'User')`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
export function AllUsersAndRoles(userName) {
  const sql = `select id, userName, role from User where userName like '${userName}%'`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
export function UpdateUserRoles(user: UserDetails) {
  const { userName, role } = user;
  const sql = `update User set role = '${role}' where userName = '${userName}'`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
