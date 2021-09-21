/* eslint-disable import/prefer-default-export */
import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import { Programs } from '../services/program.service';


export const programController = async (request: Request, h: ResponseToolkit): Promise<any> => {

    const program = await Programs().then((results) => results);
    return h.response(response(200, program));

}

