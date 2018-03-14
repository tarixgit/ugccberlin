'use strict';

const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const jwt = require('hapi-auth-jwt2');
const jwksRsa = require('jwks-rsa');
//const Sequelize = require('sequelize');
const models = require('./models');
const routes = require('./server/routes/routes.js');
const config = require('./config/config.json');
const internals = {};

//let config    = require(__dirname + '/../config/config.json')[env];
//server.register(auth.js'), () => {route
// Create hapi server instance
const server = new Hapi.Server({
    host: config.host,
    port: config.port,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'public')
        }
    }
});


const provision = async () => {
    //validation of user
    const validateUser = (decoded, request, h) => {
        console.log(" - - - - - - - decoded token:");
        console.log(decoded);
        console.log(" - - - - - - - request info:");
        console.log(request.info);
        console.log(" - - - - - - - user agent:");
        console.log(request.headers['user-agent']);
        if (decoded && decoded.sub) {
            //{ isValid, credentials, response }
            return { isValid: true };
        }
        return { isValid: false };
    };

    try {
        await server.register(Inert);

        await server.register(jwt);
        await server.auth.strategy('token', 'jwt', {
            complete: true,
            key: 'I3P9l1m0jBNDmaE9CZ2yJO0B0ugZwg5J7ZsX3lL2VEHPdsLlBfR7sV6xFOaagncO',
            verifyOptions: {
                audience: '8PVgyYFg79jOQoN4tDZlQWZma2MhRtE1',
                issuer: 'https://tarix.eu.auth0.com/',
                ignoreExpiration: true,
                algorithms: ['HS256']
            },
            validate: validateUser
        });

        // await server.register(jwt, (err) => {
        //     if (err) {
        //         console.log(err);
        //     }
        //     server.auth.strategy('jwt', 'jwt', {
        //         complete: true,
        //         key: jwksRsa.hapiJwt2Key({
        //             cache: true,
        //             rateLimit: true,
        //             jwksRequestsPerMinute: 5,
        //             jwksUri: `https://tarix.eu.auth0.com/.well-known/jwks.json`
        //         }),
        //         verifyOptions: {
        //             //audience: 'https://mrvar.auth0.com/api/v2/',
        //             audience: '{shWgv4HjTOmDicgGsHIyUylot8zXWs1u}',
        //             issuer: `https://tarix.eu.auth0.com/`,
        //             algorithms: [ 'RS256' ]
        //         }
        //     });
        //     server.auth.default('jwt');
        // });

        await server.auth.default('token');

        await server.route({
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

        await server.route(routes);

        //TODO: check why you need this
        await server.route({
            method: '*',
            path: '/{p*}',
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
        await server.ext('onPreAuth', (request, reply) => {
            return reply.continue
        });
        await server.ext('onPreResponse', function (request, reply) {
            if (request.response.isBoom) {
                // Inspect the response here, perhaps see if it's a 404?
                //return reply.redirect('/');
                console.log(request.response);
                return reply.file('index.html');
            }
            return reply.continue
        });

        await models.sequelize.sync();
        await server.start();

        console.log('Server running at:', server.info.uri);
    } catch (err) {
        console.log(err);
    }
};

provision();
