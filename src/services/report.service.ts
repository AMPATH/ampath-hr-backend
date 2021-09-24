import serviceDef from '../connection/connection';

function Reports(
  department: string | null,
  project: string | null,
  site: string | null,
  budget: string | null,
  county: string | null,
  Empstatus: string | null,
  program: string | null,
) {
  const sql = `select ER.trackingId, E.pfNumber, E.firstName, E.middleName, E.lastName,
    ER.contractStatus as "employeeStatus", C.name as county, B.name as budget,
    Prog.name as "programArea", P.name as Project,
    date_format(ER.endOfContract, "%Y-%m-%d") as contractPeriod,
    D.name as department, S.name as site
    from Employees E
    join Employee_Tracking ER on E.pfNumber = ER.pfNumber
    join Department D on ER.department = D.departmentId
    join Site S on ER.site = S.siteId
    join County C on ER.county = C.countyId
    join Budget B on ER.countyBudget = B.budgetId
    join Program Prog on ER.programArea = Prog.programId
    join Project P on ER.project = P.projectId
    where D.name=IFNULL(${department},D.name) and 
    P.name =IFNULL(${project},P.name) and S.name =IFNULL(${site},S.name) 
    and B.name =IFNULL(${budget},B.name) and C.name =IFNULL(${county},C.name) 
    and ER.contractStatus =IFNULL(${Empstatus},ER.contractStatus) and Prog.name=IFNULL(${program},Prog.name)`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
export default Reports;
