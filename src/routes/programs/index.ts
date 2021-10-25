import { Route } from '../../config/interfaces';
import programController from '../../controllers/program.controller';

const route: Array<Route> = [{
  path: '/program',
  method: 'GET',
  handler: programController,
  options: {
    tags: ['api'],
    description: 'get, all Programs that have been captured in the system',
    notes: 'Returns an array of Programs',
  },
},
{
  path: '/program',
  method: 'POST',
  handler: programController,
  options: {
    tags: ['api'],
    description: 'post, Inserts programs that have been captured in the system',
    notes: `Request body, an example below

            {
                "name": "xyz",
                "budget" 2
            }
            `,
  },
}, {
  path: '/program',
  method: 'PUT',
  handler: programController,
  options: {
    tags: ['api'],
    description: 'put, update programs that have been captured in the system using the program id',
    notes: `Request body, an example below',
          {    
              "name": "xyz",
              "budget": 6,
              "programId": 5
          }
          `,

  },
}
];

export default route;
