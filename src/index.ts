import { Server, ServerOptions } from '@hapi/hapi';
import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import routes from './routes';
import plugins from './config/plugins';

dotenv.config();

const options: ServerOptions = {
  port: process.env.PORT || 3000,
};


const validate = async (artifacts, request, h) => ({
  isValid: true,
  credentials: { user: artifacts.decoded.payload.user }
});
const server = new Server(options);

export const init = async (): Promise<Server> => {

  await server.register(plugins);
  await server.initialize();
  server.auth.strategy('simple', 'jwt', {
    keys: process.env.SECRET_KEY,
    verify: {
      aud: 'urn:audience:test',
      iss: 'urn:issuer:test',
      sub: false,
      nbf: true,
      exp: true,
      maxAgeSec: 14400,
      timeSkewSec: 15
    },
    validate
  })
  server.auth.default('simple')
  await server.route(routes);

  return server;
};

export const liftOff = async (): Promise<Server> => {
  await init();
  await server.start();
  return server;
};
