/* eslint-disable import/prefer-default-export */
import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import { Counties } from '../services/county.service';


export const countyController = async (request: Request, h: ResponseToolkit): Promise<any> => {

    const county = await Counties().then((results) => results);
    return h.response(response(200, county));

}

