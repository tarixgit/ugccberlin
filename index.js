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
    const validateUser = (decoded, request, callback) => {
        console.log(" - - - - - - - decoded token:");
        console.log(decoded);
        console.log(" - - - - - - - request info:");
        console.log(request.info);
        console.log(" - - - - - - - user agent:");
        console.log(request.headers['user-agent']);
        if (decoded && decoded.sub) {
            return callback(null, true);
        }
        /*
         //here we can lookup in db  if we such of user
        const user = users[username];
        if (!user) {
            return callback(null, false);
        }

        Bcrypt.compare(password, user.password, (err, isValid) => {
            callback(err, isValid, { id: user.id, name: user.name });
        });
        */


        return callback(null, false);
    };

    try {
        await server.register(Inert);

        await server.register(jwt);
        await server.auth.strategy('jwt', 'jwt', {
            complete: true,
            // verify the access token against the
            // remote Auth0 JWKS
            key: 'eH8-jK_JrwrH_lJDq-gelIDuHN7RpmFqv2ewLI_33CjFCNrM4AXHtbNXq5qZ4o78',
            verifyOptions: {
                //audience: 'https://tarix.eu.auth0.com/api/v2/',
                audience: 'https://tarix.eu.auth0.com/userinfo',
                issuer: `https://tarix.eu.auth0.com/`,
                algorithms: ['RS256']
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

        await server.auth.default('jwt');

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
                handler: function (request, reply) {
                    console.log('WORD1');
                    return reply.file('index.html');
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
                //return reply('error hap');
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
