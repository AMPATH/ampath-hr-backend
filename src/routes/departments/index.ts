import { Route } from '../../config/interfaces';
import departmentController from '../../controllers/department.controller';

const route: Route = {
  path: '/department',
  method: 'GET',
  handler: departmentController,
  options: {
    auth:'simple',
    tags: ['api'],
    description: 'get, all departments that have been captured in the system',
    notes: 'Returns an array of departments',
  },
};
export default route;
