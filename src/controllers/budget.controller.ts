import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import { AddBudgets, GetBudgets, UpdateBudget } from '../services/budget.service';
import { BudgetDetails, UpdateBudgetDetails } from '../types/employee';

const budgetController = async (request: Request, h: ResponseToolkit): Promise<any> => {
  switch (request.method) {
    case 'get': {
      const budget: any = await GetBudgets().then((results) => results);
      return h.response(response(!budget.length ? 500 : 200, budget)).code(!budget.length ? 500 : 200);
    }
    case 'post': {
      const budget: any = await AddBudgets(request.payload as BudgetDetails).then((results) => results);
      return h.response(response(budget.errno ? 500 : 200, budget)).code(budget.errno ? 500 : 200);
    }
    case 'put': {
      const budget: any = await UpdateBudget(request.payload as UpdateBudgetDetails).then((results) => results);
      return h.response(response(budget.errno ? 500 : 200, budget)).code(budget.errno ? 500 : 200);
    }
    default:
      return h.response(response(404, 'Not found'));
  }

};
export default budgetController;
