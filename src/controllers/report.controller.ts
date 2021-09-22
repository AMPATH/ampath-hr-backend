import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import Reports from '../services/report.service';


const reportController = async (request: Request, h: ResponseToolkit): Promise<any> => {
    const departments = request.query?.department;
    const proj = request.query?.project;
    const sites = request.query?.site;
    const prog = request?.query.program;
    const countyBudget = request?.query.budget;
    const Empstatus = request?.query.status;
    const countyGovt = request?.query.county;
    const report = await Reports(departments, proj, sites, prog, countyBudget, Empstatus, countyGovt).then(
        (results) => results);
    return h.response(response(200, report));

}
export default reportController

