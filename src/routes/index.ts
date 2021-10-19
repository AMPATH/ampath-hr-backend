import indexRoute from './endpoints';
import employeeRoute from './employees';
import budgetRoute from './budgets';
import countyRoute from './counties';
import departmentRoute from './departments';
import programRoute from './programs';
import projectRoute from './projects';
import siteRoute from './sites';
import movementRoute from './employeeMovement';
import registerRoute from './user';
import timesheetRoute from './timesheets';
import reportRoute from './reports';

export default [].concat(
  indexRoute,
  ...budgetRoute,
  countyRoute,
  departmentRoute,
  programRoute,
  projectRoute,
  siteRoute,
  movementRoute,
  reportRoute,
  ...employeeRoute,
  ...registerRoute,
  ...timesheetRoute,
);
