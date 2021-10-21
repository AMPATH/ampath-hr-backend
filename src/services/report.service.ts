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
  const sql = `select E.id, E.pfNumber,ER.trackingId, E.firstName, E.middleName, 
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
  left join Project P on ER.project = P.projectId 
  where D.name=IFNULL(${department},D.name) and 
P.name =IFNULL(${project},P.name) and S.name =IFNULL(${site},S.name) 
and B.name =IFNULL(${budget},B.name) and C.name =IFNULL(${county},C.name) 
and ER.contractStatus =IFNULL(${employeeStatus},ER.contractStatus)
and Prog.name=IFNULL(${program},Prog.name)`;
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
