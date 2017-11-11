'use strict';

const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const routes = require('./server/routes/routes.js');
// Create hapi server instance
const server = new Hapi.Server({
    port: 3000,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'public')
        }
    }
});

const provision = async () => {

await server.register(Inert);

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '.',
            redirectToSlash: true,
            index: true,
        }
    }
});

server.route(routes);

await server.start();

console.log('Server running at:', server.info.uri);
};

provision();

/*
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.file('./public/index.html');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

server.register({
    register: require('inert')
});
    server.path(__dirname + '/public');

    server.route({
        method: 'GET',
        path: '/index',
        handler: {
            file: './index.html'
        }
    });


    server.start(function(err) {
        console.log('Server started at: ' + server.info.uri)
    });

*/
/*
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});*/