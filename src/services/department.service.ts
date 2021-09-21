/* eslint-disable import/prefer-default-export */
import serviceDef from '../connection/connection';



export function Departments() {
    return new Promise((resolve, reject) => {

        serviceDef.dbConnection()
            .then((pool: any) => {
                pool.query("select * from Department", (error: any, results: any, fields: any) => {
                    if (error) reject(error);
                    resolve(results);
                }
                );
            });
    });
}
const departmentDef = { Departments };