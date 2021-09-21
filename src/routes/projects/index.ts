import { projectController } from '../../controllers/project.controller';
import { Route } from '../../config/interfaces';


const route: Route = {
    path: '/project',
    method: 'GET',
    handler: projectController,
    options: {
        tags: ['api'],
        description: 'get, all projects that have been captured in the system',
        notes: 'Returns an array of projects',
    },
}
export default route