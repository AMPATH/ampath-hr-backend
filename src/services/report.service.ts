import serviceDef from '../connection/connection';

function Reports(
  department: string | null,
  project: string | null,
  site: string | null,
  budget: string | null,
  county: string | null,
  employeeStatus: string | null,
  program: string | null,
) {
  const sql = `select * from (select ER.trackingId, E.pfNumber, E.firstName, E.middleName, E.lastName,
    ER.contractStatus as employeeStatus, C.name as county, B.name as budget,
    Prog.name as programArea, P.name as project, ER.date as trackingDate,
    date_format(ER.endOfContract, "%Y-%m-%d") as contractPeriod,
    D.name as department, S.name as site
    from Employees E
    join Employee_Tracking ER on E.pfNumber = ER.pfNumber
    join Department D on ER.department = D.departmentId
    join Site S on ER.site = S.siteId
    join County C on ER.county = C.countyId
    join Budget B on ER.countyBudget = B.budgetId
    join Program Prog on ER.programArea = Prog.programId
    join Project P on ER.project = P.projectId group by pfNumber desc) as T
      where T.department=IFNULL(${department},T.department) and 
      T.project =IFNULL(${project},T.project) and T.site =IFNULL(${site},T.site) 
      and T.budget =IFNULL(${budget},T.budget) and T.county =IFNULL(${county},T.county) 
      and T.employeeStatus =IFNULL(${employeeStatus},T.employeeStatus)
       and T.programArea=IFNULL(${program},T.programArea)`;
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
