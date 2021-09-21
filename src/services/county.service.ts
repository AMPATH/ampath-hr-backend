/* eslint-disable import/prefer-default-export */
import serviceDef from '../connection/connection';



export function Counties() {
    return new Promise((resolve, reject) => {

        serviceDef.dbConnection()
            .then((pool: any) => {
                pool.query("select * from County", (error: any, results: any, fields: any) => {
                    if (error) reject(error);
                    resolve(results);
                }
                );
            });
    });
}
const countyDef = { Budgets: Counties };