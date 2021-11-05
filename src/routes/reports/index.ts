import reportController from '../../controllers/report.controller';
import { Route } from '../../config/interfaces';

const route: Route = {
  path: '/report',
  method: 'GET',
  handler: reportController,
  options: {
    auth: 'simple',
    tags: ['api'],
    description: 'get, all reports',
    notes: 'Returns an array of reports',
  },
};
export default route;
