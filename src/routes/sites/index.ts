import siteController from '../../controllers/site.controller';
import { Route } from '../../config/interfaces';

const route: Array<Route> = [{
  path: '/site',
  method: 'GET',
  handler: siteController,
  options: {
    tags: ['api'],
    description: 'get, all sites that have been captured in the system',
    notes: 'Returns an array of sites',
  },
},
{
  path: '/site',
  method: 'POST',
  handler: siteController,
  options: {
    tags: ['api'],
    description: 'post, Add sites that have been captured in the system',
    notes: `Request body, an example below',
          {    
              "name": "xyz",
              "county": "abcdefg"
          }
          `,
  }
},
{
  path: '/site',
  method: 'PUT',
  handler: siteController,
  options: {
    tags: ['api'],
    description: 'post, Add sites that have been captured in the system using the site identification',
    notes: `Request body, an example below',
            {    
                "name": "xyz", 
                "county": 5,
                "siteId": 51
            }
            `,
  }
}
];
export default route;
