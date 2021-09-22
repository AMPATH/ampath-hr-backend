import siteController from '../../controllers/site.controller';
import { Route } from '../../config/interfaces';


const route: Route = {
    path: '/site',
    method: 'GET',
    handler: siteController,
    options: {
        tags: ['api'],
        description: 'get, all sites that have been captured in the system',
        notes: 'Returns an array of sites',
    },
}
export default route