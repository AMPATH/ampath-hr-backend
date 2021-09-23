import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import { EmployeeMovements } from '../types/employee';
import EmployeeMovement from '../services/employeeMovement.service';

const employeeMovementController = async (request: Request, h: ResponseToolkit): Promise<any> => {
  const movement: any = await EmployeeMovement(request.payload as EmployeeMovements).then(
    (result) => result,
    (error) => error,
  );
  return h.response(response(movement.errno ? 500 : 200, movement));
};
export default employeeMovementController;
