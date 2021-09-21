import Podium from "@hapi/podium";
import { iplugin } from "../config/interfaces";

const plugin: iplugin = {
  name: "event listener",
  async register(server, options) {
    const emitter: Podium = new Podium();

    emitter.registerEvent({
      name: "index.route",
      channels: ["log"],
    });

    emitter.on("index.route", async (payload) => console.log(payload));
  },
};

export default plugin;
