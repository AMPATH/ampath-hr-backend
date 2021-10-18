import { Route } from '../../config/interfaces';
import programController from '../../controllers/program.controller';

const route: Route = {
  path: '/program',
  method: 'GET',
  handler: programController,
  options: {
  }
};

export default route;
