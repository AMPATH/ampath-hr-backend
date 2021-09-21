import serviceDef from '../connection/connection';
import { Employee } from '../types/employee';

export function allEmployeesDetails(): Promise<any> {
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query('select * from Employees', (error, results, fields) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}

export function AddEmployee(employee: Employee) {
  const {
    firstName,
    middleName,
    lastName,
    idNumber,
    dob,
    age,
    telephone,
    email,
    gender,
    kraPin,
    nssf,
    nhif,
    pfNumber,
    salutation,
  } = employee;
  // eslint-disable-next-line max-len
  const sql = `INSERT INTO Employees (firstName, middleName, lastName, idNumber, dob, age, telephone, email, gender, kraPin, nssf, nhif, pfNumber, salutation) VALUES ('${firstName}', '${middleName}', '${lastName}', '${idNumber}', '${dob}', '${age}', '${telephone}', '${email}', '${gender}', '${kraPin}', '${nssf}', '${nhif}', '${pfNumber}', '${salutation}')`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
