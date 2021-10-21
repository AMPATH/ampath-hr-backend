import { Route } from '../../config/interfaces';
import budgetController from '../../controllers/budget.controller';

const route: Array<Route> = [{
  path: '/budget',
  method: 'GET',
  handler: budgetController,
  options: {
    tags: ['api'],
    description: 'get, all budgets that have been captured in the system',
    notes: 'Returns an array of budgets',
  },
}, {
  path: '/budget',
  method: 'POST',
  handler: budgetController,
  options: {
    tags: ['api'],
    description: 'post, Inserts budgets that have been captured in the system',
    notes: `Request body, an example below

            {
                "name": "xyz",
                "county": 6,
                "MflCode": 864513
            }
            `,
  },
}, {
  path: '/budget',
  method: 'PUT',
  handler: budgetController,
  options: {
    tags: ['api'],
    description: 'put, update budgets that have been captured in the system using the budget id',
    notes: `Request body, an example below',
          {
              "name": "xyz",
              "county": 6,
              "MflCode": 864513,
              "budgetId": 5
          }
          `,

  },
}];
export default route;
