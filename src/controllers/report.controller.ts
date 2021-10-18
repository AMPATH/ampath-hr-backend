import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import Reports from '../services/report.service';

const reportController = async (request: Request, h: ResponseToolkit): Promise<any> => {
  const departments = request.query.department ? JSON.stringify(request.query.department) : null;
  const proj = request.query.project ? JSON.stringify(request.query.project) : null;
  const sites = request.query.site ? JSON.stringify(request.query.site) : null;
  const countyBudget = request.query.budget ? JSON.stringify(request.query.budget) : null;
  const prog = request.query.program ? JSON.stringify(request.query.program) : null;
  const employeeStatus = request.query.status ? JSON.stringify(request.query.status) : null;
  const countyGovt = request.query.county ? JSON.stringify(request.query.county) : null;
  const report = await Reports(departments, proj, sites, countyBudget, countyGovt, employeeStatus, prog).then(
    (results) => results,
  );
  return h.response(response(200, report));
};
export default reportController;
