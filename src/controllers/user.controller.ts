import { Request, ResponseToolkit } from '@hapi/hapi';
import * as jwt from 'jsonwebtoken';
import { UserDetails } from '../types/employee';
import response from '../utils/response';
import { AddUser, GetUser, UpdateUserRoles } from '../services/user.service';

const userController = async (request: Request, h: ResponseToolkit): Promise<any> => {
  const userName = request.query.user;
  const pass = request.query.password
  switch (request.method) {
    case 'get': {
      const token = jwt.sign(
        {
          aud: 'urn:audience:test',
          iss: 'urn:issuer:test',
          sub: false,
          maxAgeSec: 14400,
          timeSkewSec: 15
        }, process.env.SECRET_KEY
      )
      const user = await GetUser(userName, pass).then((results) => results);
      return h.response(response(!user.length ? 500 : 200, !user.length ? [] : { token, user }))
        .code(!user.length ? 500 : 200);
    }
    case 'post': {
      const addUser: any = await AddUser(request.payload as UserDetails).then(
        (result) => result,
        (error) => error,
      );
      return h.response(response(addUser.errno ? 500 : 200, addUser));
    }
    case 'put': {
      const updateUser: any = await UpdateUserRoles(request.payload as UserDetails).then(
        (results) => results,
        (error) => error,
      );
      return h.response(response(updateUser.errno ? 500 : 200, updateUser)).code(updateUser.errno ? 500 : 200)
    }
    default:
      return h.response(response(404, 'Not found'));
  }
};

export default userController;
