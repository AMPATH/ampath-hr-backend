import { iroute } from '../../config/interfaces'
import response from '../../utils/response'
import {employeeController} from '../../controllers/employee.controller'

const route: Array<iroute> = [
    {
        path: '/employee',
        method: 'GET',
        handler: employeeController
    },
    {
        path: '/employee',
        method: 'POST',
        handler: employeeController
    }
]

export default route