import serviceDef from '../connection/connection';

function Reports(department, project, site, program, budget, Empstatus, county) {
  const sql = `select E.pfNumber, E.firstName, E.middleName, E.lastName, E.idNumber, E.gender,  E.dob,
    E.telephone, E.email, E.kraPin, E.nhif, E.salutation,
    ER.contractStatus as "Employee Status", C.name as County, B.name as Budget,
    Prog.name as "Program Area", P.name as Project,
    ER.endOfContract as ContractPeriod, D.name as Department, S.name as Site
    from HR.Employees E
    join HR.Employee_Tracking ER on E.pfNumber = ER.pfNumber
    join HR.Department D on ER.department = D.departmentId
    join HR.Site S on ER.site = S.siteId
    join HR.County C on ER.county = C.countyId
    join HR.Budget B on ER.countyBudget = B.budgetId
    join HR.Program Prog on ER.programArea = Prog.programId
    join HR.Project P on ER.project = P.projectId
    where  D.name=IFNULL(${department},D.name) and 
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
