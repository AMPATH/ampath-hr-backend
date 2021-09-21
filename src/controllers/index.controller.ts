import { Request, ResponseToolkit } from "@hapi/hapi";
import { Boom } from "@hapi/boom";
import Podium from "@hapi/podium";
import response from "../utils/response";

export default async (request: Request, h: ResponseToolkit): Promise<any> => {
  const payload = response(200, {
    message: "Hello #hapi.js from #Typescript!",
  });

  const { emitter } = request.server.app;

  emitter.emit("index.route", "Index route!");

  return h.response(payload);
};
