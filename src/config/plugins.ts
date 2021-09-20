import events from '../eventListeners/index.event'
import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import * as Hapi from '@hapi/hapi';
import * as HapiSwagger from 'hapi-swagger';
const packageJSON = require('../../package.json');

const swaggerOptions: HapiSwagger.RegisterOptions = {
    info: {
        title: 'Ampath HR Module API ',
        version: packageJSON.version
    }
};

const plugins: Array<Hapi.ServerRegisterPluginObject<any>> = [
    {
        plugin: Inert
    },
    {
        plugin: Vision
    },
    {
        plugin: HapiSwagger,
        options: swaggerOptions
    }
];

export default [].concat(
    events, ...plugins
)