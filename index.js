'use strict';

const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const Sequelize = require('sequelize');
const models = require('./models');
const routes = require('./server/routes/routes.js');

// Create hapi server instance
const server = new Hapi.Server({
    port: 3000,
    /*routes: {
        files: {
            relativeTo: Path.join(__dirname, 'public')
        }
    }*/
});

const provision = async () => {

    await server.register(Inert);


    server.route({
        method: 'GET',
        path: '/{param*}',
        config: {
            auth: false,
            handler: {
                directory: {
                    //path: ['app/static'],
                    path: '.',
                    redirectToSlash: true,
                    listing: true,
                    showHidden: true,
                    //index: true,
                    index: ['index.html']
                }
            }
        }

    });

    server.route(routes);

    //TODO: check why you need this
    server.route({
        method: '*',
        path:  '/{p*}',
        config: {
            auth: false,
            handler: function (request, reply) {
                console.log('WORD1');
                return reply.file('index.html');
            }
        }
    });

    server.ext('onPreResponse', function (request, reply) {
        if (request.response.isBoom) {
            // Inspect the response here, perhaps see if it's a 404?
            //return reply.redirect('/');
            return reply.file('index.html');
        }
        return reply.continue
    });

    await models.sequelize.sync();
    await server.start();

    console.log('Server running at:', server.info.uri);
};

provision();
