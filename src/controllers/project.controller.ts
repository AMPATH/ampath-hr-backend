import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import Projects from '../services/project.service';

const projectController = async (request: Request, h: ResponseToolkit): Promise<any> => {
  const project = await Projects().then((results) => results);
  return h.response(response(200, project));
};
export default projectController;
