import Podium from '@hapi/podium';
import { Plugin } from '../config/interfaces';

const plugin: Plugin = {
  name: 'event listener',
  async register(server, options) {
    const emitter: Podium = new Podium();

    emitter.registerEvent({
      name: 'index.route',
      channels: ['log'],
    });

    // eslint-disable-next-line no-console
    emitter.on('index.route', async (payload) => console.log(payload));
  },
};

export default plugin;
