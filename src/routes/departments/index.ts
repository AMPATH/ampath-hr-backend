import { Route } from '../../config/interfaces';
import departmentController from '../../controllers/department.controller';

const route: Array<Route> = [{
  path: '/department',
  method: 'GET',
  handler: departmentController,
  options: {
    auth:'simple',
    tags: ['api'],
    description: 'get, all departments that have been captured in the system',
    notes: 'Returns an array of departments',
  },
},
{
  path: '/department',
  method: 'POST',
  handler: departmentController,
  options: {
    tags: ['api'],
    description: 'post, Inserts Departments that have been captured in the system',
    notes: `Request body, an example below

            {
                "name": "xyz",
                "departmentId": 6
            }
            `,
  },
}, 
{
  path: '/department',
  method: 'PUT',
  handler: departmentController,
  options: {
    tags: ['api'],
    description: 'put, update Department that have been captured in the system using the department id',
    notes: `Request body, an example below',
          {
              "name": "xyz",
              "depaartmentId": 6
          }
          `,
  },
}];
export default route;
