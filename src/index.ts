import { Server, ServerOptions } from '@hapi/hapi';
import config from './config';
import routes from './routes';
import plugins from './config/plugins';

const options: ServerOptions = {
  port:  config.port,
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
