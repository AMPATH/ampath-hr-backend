import employeeMovementController from '../../controllers/employeeMovement.controller';
import employeeTrackController from '../../controllers/employeeTrack.controller';
import { Route } from '../../config/interfaces';

const route: Array<Route> = [
  {
    path: '/movement',
    method: 'GET',
    handler: employeeMovementController,
    options: {
      auth: 'simple',
      tags: ['api'],
      description: 'get, latest movements of all employees that have been captured in the system',
      notes: 'Returns an array of employees',
    },
  },
  {
    path: '/movement',
    method: 'POST',
    handler: employeeMovementController,
    options: {
      tags: ['api'],
      description: 'post, create an employee to stored in the database',
      notes: `Request body, an example below
    
    {
      "pfNumber": 0000,
      "project": 12,
      "department": 2,
      "site": 2,
      "county": 1,
      "countyBudget": 1,
      "programArea": 4,
      "date": "2021-09-21",
      "endOfContract": "2021-07-30",
      "dateOfJoining": "2021-05-05",
      "dateOfLeaving": null,
      "jobSpecification": "Information Service",
      "contractStatus": "Active"
    }
    `,
    },
  }, 
  {
    path: '/trackmovement',
    method: 'GET',
    handler: employeeTrackController,
    options: {
      tags: ['api'],
      description: 'get, track movements of an employee that has been captured in the system',
      notes: 'Returns an array of employee movements',
    }
  }];

export default route;
