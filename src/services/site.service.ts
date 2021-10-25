import { SiteDetails } from '../types/employee';
import serviceDef from '../connection/connection';

export function Sites() {
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query('select * from Site', (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
export function AddSites(siteDetails: SiteDetails) {
  const { name, county } = siteDetails;
  const sql = `Insert into Site(name, county) values ('${name}', '${county}')`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
export function UpdateSites(siteDetails: SiteDetails) {
  const { name, county, siteId } = siteDetails
  const sql = `update Site set name ='${name}', county = '${county}' where SiteID = ${siteId}`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
