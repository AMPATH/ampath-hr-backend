import serviceDef from '../connection/connection';
import { EmployeeMovements } from '../types/employee';

export function recentMovement(): Promise<any> {
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(
        `select E.id, E.pfNumber,ER.trackingId, E.firstName, E.middleName, 
        E.nssf, E.lastName, E.idNumber, E.gender,  E.dob, 
        E.telephone, E.email, E.kraPin, E.nhif, E.salutation,
        ER.contractStatus as employeeStatus, ER.jobSpecification, C.name as county, B.name as budget,
        Prog.name as programArea, P.name as project,
        ER.endOfContract as contractPeriod, D.name as department, S.name as site
        from (select * from Employee_Tracking group by pfNumber desc) as ER
        left join Employees E on E.pfNumber = ER.pfNumber
        left join Department D on ER.department = D.departmentId
        left join Site S on ER.site = S.siteId
        left join County C on ER.county = C.countyId
        left join Budget B on ER.countyBudget = B.budgetId
        left join Program Prog on ER.programArea = Prog.programId
        left join Project P on ER.project = P.projectId`,
        (error, results, fields) => {
          if (error) reject(error);
          resolve(results);
        },
      );
    });
  });
}

export function employeeTrackMovement(pfNumber): Promise<any> {
  const sql = `select * from Employee_Tracking where pfNumber='${pfNumber}' order by trackingId DESC`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error,results,fields) => {
        if(error) reject(error);
        resolve(results);
      })
    });
  });
}

function EmployeeMovement(employeeMovement: EmployeeMovements) {
  const {
    pfNumber,
    project,
    department,
    site,
    county,
    countyBudget,
    programArea,
    endOfContract,
    dateOfJoining,
    dateOfLeaving,
    jobSpecification,
    contractStatus,
  } = employeeMovement;
  // eslint-disable-next-line max-len
  const sql = `INSERT INTO Employee_Tracking(pfNumber, project, department, site,county, countyBudget, programArea,date,endOfContract, dateOfJoining,dateOfLeaving,jobSpecification,contractStatus) VALUES('${pfNumber}','${project}','${department}','${site}','${county}','${countyBudget}','${programArea}',now(),'${endOfContract}','${dateOfJoining}','${dateOfLeaving}','${jobSpecification}','Active')`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}

export default EmployeeMovement;
