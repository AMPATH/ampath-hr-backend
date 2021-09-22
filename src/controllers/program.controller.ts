import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import Programs from '../services/program.service';


const programController = async (request: Request, h: ResponseToolkit): Promise<any> => {

    const program = await Programs().then((results) => results);
    return h.response(response(200, program));

}
export default programController


