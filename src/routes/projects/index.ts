import projectController from '../../controllers/project.controller';
import { Route } from '../../config/interfaces';

const route: Array<Route> = [{
  path: '/project',
  method: 'GET',
  handler: projectController,
  options: {
    tags: ['api'],
    description: 'get, all projects that have been captured in the system',
    notes: 'Returns an array of projects',
  },
},
{
  path: '/project',
  method: 'POST',
  handler: projectController,
  options: {
    tags: ['api'],
    description: 'post, Add projects that have been captured in the system',
    notes: `Request body, an example below',
          {    
              "name": "xyz"
          }
          `,
  }
},
{
  path: '/project',
  method: 'PUT',
  handler: projectController,
  options: {
    tags: ['api'],
    description: 'put, Edit projects that have been captured in the system using the project identification',
    notes: `Request body, an example below',
            {    
                "name": "xyz"
            }
            `,
  }
}
];
export default route;
