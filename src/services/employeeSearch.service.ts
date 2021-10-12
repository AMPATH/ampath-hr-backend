import serviceDef from '../connection/connection';

function GetEmployee(pfNumber): Promise<any> {
  const sql = `select E.pfNumber, E.firstName, E.middleName, E.lastName, E.idNumber, E.gender, E.age,
  date_format(E.dob, "%Y-%m-%d") as dateOfBirth, 
  E.telephone, E.email, E.kraPin, E.nhif, E.nssf, E.salutation,
  C.name as County, C.countyId, B.name as Budget, B.budgetId,
  Prog.name as "ProgramArea", Prog.programId, P.name as Project, P.projectId,
  ET.contractStatus ,date_format(ET.endOfContract,"%Y-%m-%d") as endOfContract ,
  date_format(ET.dateOfJoining, "%Y-%m-%d") as dateOfJoining , 
  date_format(ET.dateOfLeaving, "%Y-%m-%d") as dateOfLeaving , ET.changed, ET.jobSpecification,
  date_format(ET.date,"%Y-%m-%d") as date,
  D.name as Department, D.departmentId, S.name as Site, S.siteId
  from Employees E
  left join Employee_Tracking ET on E.pfNumber = ET.pfNumber
  left join Department D on ET.department = D.departmentId
  left join Site S on ET.site = S.siteId
  left join County C on ET.county = C.countyId
  left join Budget B on ET.countyBudget = B.budgetId
  left join Program Prog on ET.programArea = Prog.programId
  left join Project P on ET.project = P.projectId
  where E.pfNumber = '${pfNumber}' order by ET.trackingId desc limit 1 `;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error, results, fields) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
export default GetEmployee;
