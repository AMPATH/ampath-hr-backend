import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import { allEmployeesDetails, AddEmployee, EmployeeMovement } from '../services/employee.service';
import { Employee, EmployeeMovements } from '../types/employee';

const employeeController = async (request: Request, h: ResponseToolkit): Promise<any> => {
    switch (request.method) {
        case 'get': {
            const allEmployees = await allEmployeesDetails().then((results) => results);
            return h.response(response(200, allEmployees));
        }
        case 'post': {
            const results: any = await AddEmployee(request.payload as Employee).then(
                (result) => result,
                (error) => error,
            );
            return h.response(response(results.errno ? 500 : 200, results));
        }
        // case 'post': {
        //     const movement: any = await EmployeeMovement(request.payload as EmployeeMovements).then(
        //         (result) => result,
        //         (error) => error,
        //     );
        //     return h.response(response(movement.errno ? 500 : 200, movement));
        // }
        default:
            return h.response(response(404, 'Not found'));

    }
};

export default employeeController;



