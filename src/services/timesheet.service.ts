import serviceDef from '../connection/connection';
import { TimesheetsUpdate } from '../types/employee';

export function GetTimesheets(pfNumber): Promise<any> {
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(`select * from Timesheets where pfNumber= '${pfNumber}'`, (error, results, fields) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}

export function AddTimesheets(timesheet: TimesheetsUpdate) {
  const {
    pfNumber, month, upload } = timesheet;
  // eslint-disable-next-line max-len
  const sql = `INSERT INTO Timesheets (pfNumber, month, upload) VALUES ('${pfNumber}', '${month}', '${upload}')`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
