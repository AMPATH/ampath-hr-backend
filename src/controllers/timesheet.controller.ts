import { Request, ResponseToolkit } from '@hapi/hapi';
import { TimesheetsUpdate } from '../types/employee';
import response from '../utils/response';
import { AddTimesheets, GetTimesheets } from '../services/timesheet.service';

const timesheetController = async (request: Request, h: ResponseToolkit): Promise<any> => {
  const pfNumber = request.query.pfnumber;

  switch (request.method) {
    case 'get': {
      const timesheets = await GetTimesheets(pfNumber).then((results) => results);
      return h.response(response(!timesheets.length ? 500 : 200, timesheets)).code(!timesheets.length ? 500 : 200);
    }

    case 'post': {
      const results: any = await AddTimesheets(request.payload as TimesheetsUpdate).then(
        (result) => result,
        (error) => error,
      );
      return h.response(response(results.errno ? 500 : 200, results)).code(results.errno ? 500 : 200);
    }
    default:
      return h.response(response(404, 'Not found'));
  }
};

export default timesheetController;
