import { Request, ResponseToolkit, Server } from '@hapi/hapi';

export interface Route {
  method: String | String[];
  path: String;
  handler(request: Request, h: ResponseToolkit): any;
  options?: object;
}

export interface Plugin {
  name: String;
  version?: String;
  register(server: Server, options: any): void;
}
