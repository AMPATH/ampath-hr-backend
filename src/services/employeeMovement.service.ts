import serviceDef from '../connection/connection';
import { EmployeeMovements } from '../types/employee';


export function recentMovement(): Promise<any> {
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(`select ER.trackingId, E.pfNumber, E.firstName, E.middleName, E.lastName,
      ER.contractStatus as "employeeStatus", C.name as county, B.name as budget,
      Prog.name as "programArea", P.name as project, ER.date as trackingDate,
      date_format(ER.endOfContract, "%Y-%m-%d") as contractPeriod,
      D.name as department, S.name as site
      from Employees E
        join Employee_Tracking ER on E.pfNumber = ER.pfNumber
      join Department D on ER.department = D.departmentId
      join Site S on ER.site = S.siteId
      join County C on ER.county = C.countyId
      join Budget B on ER.countyBudget = B.budgetId
      join Program Prog on ER.programArea = Prog.programId
      join Project P on ER.project = P.projectId group by pfNumber desc`, (error, results, fields) => {
        if (error) reject(error);
        resolve(results);
      });
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
  const sql = `INSERT INTO Employee_Tracking(pfNumber, project, department, site,county, countyBudget, programArea,date,endOfContract, dateOfJoining,dateOfLeaving,jobSpecification,contractStatus) VALUES('${pfNumber}','${project}','${department}','${site}','${county}','${countyBudget}','${programArea}',now(),'${endOfContract}','${dateOfJoining}','${dateOfLeaving}','${jobSpecification}','${contractStatus}')`;
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
