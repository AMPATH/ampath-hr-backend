import serviceDef from "../connection/connection";
import { EmployeeMovements } from "../types/employee";

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
        contractStatus
    } = employeeMovement
    // eslint-disable-next-line max-len
    const sql = `INSERT INTO Employee_Tracking(pfNumber, project, department, site,county, countyBudget, programArea,date,endOfContract, dateOfJoining,dateOfLeaving,jobSpecification,contractStatus) VALUES('${pfNumber}','${project}','${department}','${site}','${county}','${countyBudget}','${programArea}',now(),'${endOfContract}','${dateOfJoining}','${dateOfLeaving}','${jobSpecification}','${contractStatus}')`
    return new Promise((resolve, reject) => {
        serviceDef.dbConnection().then((pool: any) => {
            pool.query(sql, (error: any, results: any, fields: any) => {
                if (error) reject(error);
                resolve(results);
            }
            );
        });
    });
}

export default EmployeeMovement;