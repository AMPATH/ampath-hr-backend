import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import { GetSingleTimesheet } from '../services/timesheet.service';

const singleTimesheetController = async (request: Request, h): Promise<any> => {
  const fl = request.query.filename;
  switch (request.method) {
    case 'get': {
      const timesheets = await GetSingleTimesheet(fl);
      if (timesheets) {
        return h.file(timesheets.path);
      }
      return h.response(response(404, 'Not found'));
    }
    default:
      return h.response(response(404, 'Not found'));
  }
};
export default singleTimesheetController;

