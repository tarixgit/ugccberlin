const models = require('../../models');

module.exports = {
    all: async function(request, reply) {
        const users = await models.New.findAll();
        return users;
    }
};