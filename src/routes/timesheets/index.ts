import { Route } from '../../config/interfaces';
import timesheetController from '../../controllers/timesheet.controller';
import singleTimesheetController from '../../controllers/singleTimesheet.controller';

const route: Array<Route> = [
  {
    path: '/timesheet',
    method: 'GET',
    handler: timesheetController,
    options: {
      tags: ['api'],
      description: 'get, all timesheets for an employee that have been captured in the system',
      notes: 'Returns an array of timesheets',
    },
  },
  {
    path: '/timesheet',
    method: 'POST',
    handler: timesheetController,
    options: {
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data',
        multipart: true,
      },
      tags: ['api'],
      description: 'post, add a timesheet for an employee to stored in the database',
      notes: `Request body, an example below

            {
              "pfNumber": 1256534,
              "month": "2021-05",
              "upload": "timesheet1.jpg"
                
            }
            `,
    },
  },
  {
    path: '/image',
    method: 'GET',
    handler: singleTimesheetController,
    options: {
      auth: false,
      tags: ['api'],
      description:
        // eslint-disable-next-line max-len
        'get, all images(timesheets) for an employee that have been captured in the system, stores it in uploads folder',
      notes: 'Returns an array of timesheets',
    },
  },
];

export default route;
