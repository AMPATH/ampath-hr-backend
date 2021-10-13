import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import { allEmployeesDetails, AddEmployee, UpdateEmployee } from '../services/employee.service';
import { Employee, EmployeeUpdate } from '../types/employee';

const employeeController = async (request: Request, h: ResponseToolkit): Promise<any> => {
  switch (request.method) {
    case 'get': {
      const allEmployees = await allEmployeesDetails().then((results) => results);
      return h.response(response(!allEmployees.length ? 500 : 200, allEmployees))
        .code(!allEmployees.length ? 500 : 200);
    }
    case 'put': {
      const update: any = await UpdateEmployee(request.payload as EmployeeUpdate).then(
        (result) => result,
        (error) => error,
      );
      return h.response(response(update.errno ? 500 : 200, update)).code(update.errno ? 500 : 200);
    }
    case 'post': {
      const results: any = await AddEmployee(request.payload as Employee).then(
        (result) => result,
        (error) => error,
      );
      return h.response(response(results.errno ? 500 : 200, results)).code(results.errno ? 500 : 200);
    }
    default:
      return h.response(response(404, 'Not found'));
  }
};

export default employeeController;
