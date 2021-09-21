import indexRoute from './endpoints';
import employeeRoute from './employees';

export default [].concat(indexRoute, ...employeeRoute);
