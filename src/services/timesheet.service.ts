import fs from 'fs';
import path from 'path';
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
  const { pfNumber, month, upload } = timesheet;
  const name = upload.hapi.filename;
  const employees = JSON.parse(pfNumber);
  if (upload) {
    const fileName = upload.hapi.filename;
    const filePath = `${__dirname}/../../uploads/${fileName}`;
    const file = fs.createWriteStream(filePath);
    file.on('error', (error) => {
      if (error) throw error;
    });
    upload.pipe(file);
    upload.on('end', (error) => {
      if (error) throw error;
      const uploadDetails = {
        filename: upload.hapi.filename,
        headers: upload.hapi.headers,
      };
      return JSON.stringify(uploadDetails);
    });
  }
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < employees.length; i++) {
      serviceDef.dbConnection().then((pool: any) => {
        pool.query(
          `
          INSERT INTO Timesheets(pfNumber, month, upload) VALUES(${employees[i]}, '${month}', '${name}')`,
          (error: any, results: any, fields: any) => {
            if (error) reject(error);
            resolve(results);
          },
        );
      });
    }
  });
}
export function GetSingleTimesheet(filename) {
  const file = `${filename}`;
  const filePath = path.resolve(__dirname, `../../uploads/${file}`);
  if (fs.existsSync(filePath)) {
    const stream = fs.createReadStream(filePath);
    return stream;
  }
}
