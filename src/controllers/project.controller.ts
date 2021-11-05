import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import { AddProjects, Projects, UpdateProjects } from '../services/project.service';
import { ProjectDetails } from '../types/employee';

const projectController = async (request: Request, h: ResponseToolkit): Promise<any> => {
  switch (request.method) {
    case 'get': {
      const project: any = await Projects().then((results) => results);
      return h.response(response(200, project));
    }
    case 'post': {
      const addProject: any = await AddProjects(request.payload as ProjectDetails).then((results) => results);
      return h.response(response(addProject.errno ? 500 : 200, addProject)).code(addProject.errno ? 500 : 200)
    }
    case 'put': {
      const updateProject: any = await UpdateProjects(request.payload as ProjectDetails).then((results) => results);
      return h.response(response(updateProject.errno ? 500 : 200, updateProject))
        .code(updateProject.errno ? 500 : 200);
    }
    default:
      return h.response(response(404, "Page Not Found"));
  }
};
export default projectController;
