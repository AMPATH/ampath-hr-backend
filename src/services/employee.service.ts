import serviceDef from '../connection/connection';
import { Employee, EmployeeUpdate } from '../types/employee';

export function allEmployeesDetails(): Promise<any> {
  const sql = `select E.id, E.pfNumber,ER.trackingId, E.firstName, E.middleName, 
  E.nssf, E.lastName, E.idNumber, E.gender,  E.dob, 
  E.telephone, E.email, E.kraPin, E.nhif, E.salutation,
  ER.contractStatus as employeeStatus, ER.jobSpecification, C.name as county, B.name as budget,
  Prog.name as programArea, P.name as project,
  ER.endOfContract as contractPeriod, D.name as department, S.name as site
  from (select * from Employee_Tracking group by pfNumber desc) as ER
  right join Employees E on E.pfNumber = ER.pfNumber
  left join Department D on ER.department = D.departmentId
  left join Site S on ER.site = S.siteId
  left join County C on ER.county = C.countyId
  left join Budget B on ER.countyBudget = B.budgetId
  left join Program Prog on ER.programArea = Prog.programId
  left join Project P on ER.project = P.projectId where ER.contractStatus ='Active' or ER.contractStatus IS NULL`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error, results, fields) => {
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
  const sql = `INSERT INTO Employees (firstName, middleName, lastName, idNumber, dob, telephone, email, gender, kraPin, nssf, nhif, pfNumber, salutation) VALUES ('${firstName}', '${middleName}', '${lastName}', '${idNumber}', '${dob}', '${telephone}', '${email}', '${gender}', '${kraPin}', '${nssf}', '${nhif}', '${pfNumber}', '${salutation}')`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}

export function UpdateEmployee(employeeUpdate: EmployeeUpdate) {
  const {
    firstName,
    middleName,
    lastName,
    idNumber,
    dob,
    telephone,
    email,
    gender,
    kraPin,
    nssf,
    nhif,
    pfNumber,
    salutation,
  } = employeeUpdate;
  // eslint-disable-next-line max-len
  const sql = `UPDATE Employees SET firstName='${firstName}', middleName='${middleName}',lastName='${lastName}',idNumber='${idNumber}',dob='${dob}',telephone='${telephone}',email='${email}',gender='${gender}',kraPin='${kraPin}',nssf='${nssf}',nhif='${nhif}',salutation='${salutation}' WHERE pfNumber = '${pfNumber}'`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}

export function getEmployeeRegistrationDetails(pfNumber): Promise<any> {
  const sql = `SELECT * FROM Employees WHERE pfNumber='${pfNumber}'`;
  return new Promise(( resolve,reject ) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error,results,fields) => {
        if(error) reject(error);
        resolve(results);
      })
    });
  });
}
