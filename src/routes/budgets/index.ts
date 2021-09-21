import { Route } from '../../config/interfaces';
import { budgetController } from '../../controllers/budget.controller'


const route: Route = {
    path: '/budget',
    method: 'GET',
    handler: budgetController,
    options: {
        tags: ['api'],
        description: 'get, all budgets that have been captured in the system',
        notes: 'Returns an array of budgets',
    },
}
export default route