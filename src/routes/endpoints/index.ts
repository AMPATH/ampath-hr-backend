import { Route } from '../../config/interfaces';
import indexController from '../../controllers/index.controller';

const route: Route = {
  path: '/',
  method: 'GET',
  handler: indexController,
  options: {
  }
};

export default route;
