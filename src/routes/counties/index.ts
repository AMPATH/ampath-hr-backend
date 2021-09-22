import countyController from '../../controllers/county.controller';
import { Route } from '../../config/interfaces';


const route: Route = {
    path: '/county',
    method: 'GET',
    handler: countyController,
    options: {
        tags: ['api'],
        description: 'get, all counties that have been captured in the system',
        notes: 'Returns an array of counties',
    },
}
export default route