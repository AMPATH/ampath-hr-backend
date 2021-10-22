import serviceDef from '../connection/connection';
import { BudgetDetails, UpdateBudgetDetails } from '../types/employee';

export function GetBudgets() {
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query('select * from Budget', (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
};
export function AddBudgets(budgetDetails: BudgetDetails) {
  const { name, county, mflCode } = budgetDetails;
  const sql = `Insert into Budget (name,county,mflCode) values ('${name}', ${county},'${mflCode}')`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
export function UpdateBudget(budgetInfo: UpdateBudgetDetails) {
  const { name, county, mflCode, budgetId } = budgetInfo;
  // eslint-disable-next-line max-len
  const sql = `update Budget set name ='${name}', county = '${county}', mflCode='${mflCode}' Where budgetId = '${budgetId}'`
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}



