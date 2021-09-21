/* eslint-disable import/prefer-default-export */
import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import { Budgets } from '../services/budget.service';


export const budgetController = async (request: Request, h: ResponseToolkit): Promise<any> => {

    const budget = await Budgets().then((results) => results);
    return h.response(response(200, budget));

}

