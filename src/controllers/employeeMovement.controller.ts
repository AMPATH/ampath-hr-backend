import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import { EmployeeMovements } from '../types/employee';
import EmployeeMovement, { recentMovement } from '../services/employeeMovement.service';

const employeeMovementController = async (request: Request, h: ResponseToolkit): Promise<any> => {
  switch (request.method) {
    case 'get': {
      const recentmovement = await recentMovement().then((results) => results);
      return h.response(response(!recentmovement.length ? 500 : 200, recentmovement))
        .code(!recentmovement.length ? 500 : 200);
    }
    case 'post': {
      const movement: any = await EmployeeMovement(request.payload as EmployeeMovements).then(
        (result) => result,
        (error) => error,
      );
      return h.response(response(movement.errno ? 500 : 200, movement)).code(movement.errno ? 500 : 200);
    }
    default:
      return h.response(response(404, 'Not found'));
  }

};
export default employeeMovementController;
