import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import { AddSites, Sites, UpdateSites } from '../services/site.service';
import { SiteDetails } from '../types/employee';

const siteController = async (request: Request, h: ResponseToolkit): Promise<any> => {
  switch (request.method) {
    case 'get': {
      const site: any = await Sites().then((results) => results);
      return h.response(response(!site.length ? 500 : 200, site)).code(!site.length ? 500 : 200);
    }
    case 'post': {
      const addSite: any = await AddSites(request.payload as SiteDetails).then((results) => results);
      return h.response(response(!addSite.length ? 500 : 200, addSite)).code(!addSite.length ? 500 : 200);
    }
    case 'put': {
      const updateSite: any = await UpdateSites(request.payload as SiteDetails).then((results) => results);
      return h.response(response(!updateSite.length ? 500 : 200, updateSite)).code(!updateSite.length ? 500 : 200);
    }
    default:
      return h.response(response(404, "Page Not Found"))
  }

};
export default siteController;
