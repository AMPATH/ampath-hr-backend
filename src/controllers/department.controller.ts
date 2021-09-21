/* eslint-disable import/prefer-default-export */
import { Request, ResponseToolkit } from '@hapi/hapi'
import response from '../utils/response'
import { Departments } from '../services/department.service';


export const departmentController = async (request: Request, h: ResponseToolkit): Promise<any> => {

    const department = await Departments().then((results) => results);
    return h.response(response(200, department));

}

