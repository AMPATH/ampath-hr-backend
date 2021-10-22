import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import { employeeTrackMovement } from '../services/employeeMovement.service';

const employeeTrackController = async (request: Request, h: ResponseToolkit): Promise<any> => {
    const pfNumber = request.query.pfnumber;
    const employeeMovement = await employeeTrackMovement(pfNumber).then((results) => results);
    return h.response(response(!employeeMovement.length ? 500 : 200, employeeMovement))
        .code(!employeeMovement.length ? 500 : 200);
  };

export default employeeTrackController;