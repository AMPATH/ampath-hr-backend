import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import { AddCounties, Counties, UpdateCounties } from '../services/county.service';
import { CountyDetails } from '../types/employee';

const countyController = async (request: Request, h: ResponseToolkit): Promise<any> => {
  switch (request.method) {
    case 'get': {
      const county: any = await Counties().then((results) => results);
      return h.response(response(!county.length ? 500 : 200, county)).code(!county.length ? 500 : 200);
    }
    case 'post': {
      const county: any = await AddCounties(request.payload as CountyDetails).then((results) => results);
      return h.response(response(county.errno ? 500 : 200, county)).code(county.errno ? 500 : 200);
    }
    case 'put': {
      const county: any = await UpdateCounties(request.payload as CountyDetails).then((results) => results);
      return h.response(response(county.errno ? 500 : 200, county)).code(county.errno ? 500 : 200);
    }
    default:
      return h.response(response(404, "Page Not Found"));
  }

};
export default countyController;
