import { iroute } from '../../config/interfaces'
import {employeeController} from '../../controllers/employee.controller';
import * as HapiSwagger from 'hapi-swagger';

const route: Array<iroute> = [
    {
        path: '/employee',
        method: 'GET',
        handler: employeeController,
        options: {
            tags: ['api'],
            description: 'get, all employees that have been captured in the system',
            notes: `Returns an array of employees`,
        }
    },
    {
        path: '/employee',
        method: 'POST',
        handler: employeeController,
        options: {
            tags: ['api'],
            description: 'post, create an employee to stored in the database',
            notes: `Returns an status of saving operation`,
            plugins: {
              HapiSwagger: {
                  payloadType: 'form'
              }
            },
              
        }
    }
]

export default route