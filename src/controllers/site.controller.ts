import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import Sites  from '../services/site.service';


const siteController = async (request: Request, h: ResponseToolkit): Promise<any> => {

    const site = await Sites().then((results) => results);
    return h.response(response(200, site));

}
export default siteController

