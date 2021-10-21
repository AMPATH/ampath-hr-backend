import countyController from '../../controllers/county.controller';
import { Route } from '../../config/interfaces';

const route: Array<Route> = [{
  path: '/county',
  method: 'GET',
  handler: countyController,
  options: {
    tags: ['api'],
    description: 'get, all counties that have been captured in the system',
    notes: 'Returns an array of counties',
  },
},
{
  path: '/county',
  method: 'POST',
  handler: countyController,
  options: {
    tags: ['api'],
    description: 'post, Inserts counties that have been captured in the system',
    notes: `Request body, an example below

            {
                "name": "xyz",
                "countyId": 6
            }
            `,
  },
}, {
  path: '/county',
  method: 'PUT',
  handler: countyController,
  options: {
    tags: ['api'],
    description: 'put, update counties that have been captured in the system using the county id',
    notes: `Request body, an example below',
          {
              "name": "xyz",
              "countyId": 6
          }
          `,

  },
}
];
export default route;
