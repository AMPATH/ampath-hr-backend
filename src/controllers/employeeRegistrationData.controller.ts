import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import { getEmployeeRegistrationDetails } from '../services/employee.service';

const employeeRegistrationController = async (request: Request, h: ResponseToolkit): Promise<any> => {
    const pfNumber = request.query.pfnumber;
    const employeeDetails = await getEmployeeRegistrationDetails(pfNumber).then((results) => results);
    return h.response(response(!employeeDetails.length ? 500 : 200, employeeDetails))
        .code(!employeeDetails.length ? 500 : 200);
  };

export default employeeRegistrationController;