/* eslint-disable import/prefer-default-export */
import { EOPNOTSUPP } from 'constants';
import serviceDef from '../connection/connection';

function Programs() {
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query('select * from Program', (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
export default Programs;
