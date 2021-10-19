import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import GetEmployee from '../services/employeeSearch.service';

const searchController = async (request: Request, h: ResponseToolkit): Promise<any> => {
  const pfNumber = request.query.pfnumber;
  const employee = await GetEmployee(pfNumber).then((results) => results);
  return h.response(response(!employee.length ? 500 : 200, employee)).code(!employee.length ? 500 : 200);
};
export default searchController;
