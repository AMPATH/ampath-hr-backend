import { Request, ResponseToolkit } from '@hapi/hapi';
import response from '../utils/response';
import { AddDepartments, Departments, UpdateDepartments } from '../services/department.service';
import { DepartmentDetails } from '../types/employee';

const departmentController = async (request: Request, h: ResponseToolkit): Promise<any> => {
  switch (request.method) {
    case 'get': {
      const department: any = await Departments().then((results) => results);
      return h.response(response(200, department));
    }

    case 'post': {
      const department: any = await AddDepartments(request.payload as DepartmentDetails).then((results) => results);
      return h.response(response(department.errno ? 500 : 200, department)).code(department.errno ? 500 : 200)
    }
    case 'put': {
      const department: any = await UpdateDepartments(request.payload as DepartmentDetails).then((results) => results);
      return h.response(response(department.errno ? 500 : 200, department)).code(department.errno ? 500 : 200);
    }
    default:
      return h.response(response(404, "Page Not Found"))
  }
};
export default departmentController;
