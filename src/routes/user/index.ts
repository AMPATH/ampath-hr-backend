import { Route } from '../../config/interfaces';
import userController from '../../controllers/user.controller';

const route: Array<Route> = [
  {
    path: '/register',
    method: 'GET',
    handler: userController,
    options: {
      auth: false,
      tags: ['api'],
      description: 'get, user that has been captured in the system',
      notes: 'Returns a user',
    },
  },
  {
    path: '/register',
    method: 'POST',
    handler: userController,
    options: {
      auth: false,
      tags: ['api'],
      description: 'post, create a user to stored in the database',
      notes: `Request body, an example below

            {
                "userName": "admin",
                "email": "admin@admin.com",
                "password": "Admin123",
            }
            `,
    },
  },
];

export default route;
