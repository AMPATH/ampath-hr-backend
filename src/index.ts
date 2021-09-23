import { Server, ServerOptions } from '@hapi/hapi';
import * as dotenv from 'dotenv';
import routes from './routes';
import plugins from './config/plugins';

dotenv.config();

const options: ServerOptions = {
  port: process.env.PORT || 3000,
};

const server = new Server(options);

export const init = async (): Promise<Server> => {
  await server.route(routes);
  await server.register(plugins);
  await server.initialize();

  return server;
};

export const liftOff = async (): Promise<Server> => {
  await init();
  await server.start();
  return server;
};
