/* eslint-disable import/prefer-default-export */
import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import { Sites } from '../services/site.service';


export const siteController = async (request: Request, h: ResponseToolkit): Promise<any> => {

    const site = await Sites().then((results) => results);
    return h.response(response(200, site));

}

