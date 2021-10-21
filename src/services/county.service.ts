import { CountyDetails } from '../types/employee';
/* eslint-disable import/prefer-default-export */
import serviceDef from '../connection/connection';

export function Counties() {
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query('select * from County', (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
export function AddCounties(countyInfo: CountyDetails) {
  const {countyId, name} = countyInfo
  const sql = `Insert into County (countyId,name) values ('${countyId}', '${name}')`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
export function UpdateCounties(countyInfo: CountyDetails) {
  const {countyId, name} = countyInfo
  const sql = `update County set name ='${name}', countyId = '${countyId}' Where countyId = '${countyId}'`
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}

