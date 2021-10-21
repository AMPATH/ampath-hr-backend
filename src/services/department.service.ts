/* eslint-disable import/prefer-default-export */
import { DepartmentDetails } from '../types/employee';
import serviceDef from '../connection/connection';

export function Departments() {
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query('select * from Department', (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
export function AddDepartments(departmentInfo: DepartmentDetails) {
  const {departmentId, name} = departmentInfo
  const sql = `Insert into Department (departmentId,name) values ('${departmentId}', '${name}')`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
export function UpdateDepartments(departmentInfo: DepartmentDetails) {
  const {departmentId, name} = departmentInfo
  const sql = `update Department set name ='${name}',
   departmentId = '${departmentId}' Where departmentId = '${departmentId}'`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}



