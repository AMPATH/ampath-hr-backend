import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';

export default async (request: Request, h: ResponseToolkit): Promise<any> => {
  const payload = response(200, {
    message: 'Ampath HR Backend, API is working',
  });

  return h.response(payload);
};
