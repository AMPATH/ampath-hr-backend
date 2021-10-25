import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import { AddPrograms, Programs, UpdatePrograms } from '../services/program.service';
import { ProgramDetails } from '../types/employee';

const programController = async (request: Request, h: ResponseToolkit): Promise<any> => {
  
  switch (request.method) {
    case 'get': {
      const program = await Programs().then((results) => results);
  return h.response(response(200, program));
    }
    case 'post': {
      const programs: any = await AddPrograms(request.payload as ProgramDetails).then(
        (result) => result,
        (error) => error,
      );
      return h.response(response(programs.errno ? 500 : 200, programs)).code(programs.errno ? 500 : 200);
    }
    case 'put': {
      const results: any = await UpdatePrograms(request.payload as ProgramDetails).then(
        (result) => result,
        (error) => error,
      );
      return h.response(response(results.errno ? 500 : 200, results)).code(results.errno ? 500 : 200);
    }
    default:
      return h.response(response(404, 'Not found'));
  }
};
export default programController;
