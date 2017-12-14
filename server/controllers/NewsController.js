const models = require('../../models');

module.exports = {
    all: function(request, reply) {
        return models.New.findAll()
            .then(function(users) {
                reply(users).code(200);
            }).catch((err) => {
                reply(err).code(500);
            });
    }
};