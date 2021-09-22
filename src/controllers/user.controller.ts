import { Request, ResponseToolkit } from '@hapi/hapi';
import { UserDetails } from '../types/employee';
import response from '../utils/response';
import { AddUser, GetUser } from '../services/user.service';

const userController = async (request: Request, h: ResponseToolkit): Promise<any> => {
    const userName = request.query.user;
    switch (request.method) {
        case 'get': {
            const user = await GetUser(userName).then((results) => results);
            return h.response(response(200, user));
        }
        case 'post': {
            const update: any = await AddUser(request.payload as UserDetails).then(
                (result) => result,
                (error) => error,
            );
            return h.response(response(update.errno ? 500 : 200, update));
        }

        default:
            return h.response(response(404, 'Not found'));

    }
};

export default userController;



