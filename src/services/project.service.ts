import { ProjectDetails } from '../types/employee';
import serviceDef from '../connection/connection';

export function Projects() {
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query('select * from Project', (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
export function AddProjects(projectDetails: ProjectDetails) {
  const { name } = projectDetails;
  const sql = `Insert into Project(name) values ('${name}')`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}
export function UpdateProjects(projectDetails: ProjectDetails) {
  const { name, projectId } = projectDetails
  const sql = `update Project set name ='${name}' where projectId = ${projectId}`;
  return new Promise((resolve, reject) => {
    serviceDef.dbConnection().then((pool: any) => {
      pool.query(sql, (error: any, results: any, fields: any) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  });
}

