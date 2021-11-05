import { ProgramDetails } from '../types/employee';
import serviceDef from '../connection/connection';

export function Programs() {
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query('select * from Program', (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
export function AddPrograms(programInfo: ProgramDetails) {
  const { budget, name } = programInfo
  const sql = `Insert into Program(name, budget) values ('${name}', '${budget}')`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
export function UpdatePrograms(programDetails: ProgramDetails) {
  const { budget, name, programId } = programDetails
  const sql = `update Program set name ='${name}',
   budget = '${budget}' Where programId = '${programId}'`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
