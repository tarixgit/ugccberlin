const NewsController = require('../controllers/NewsController');

module.exports = [
    {
        path: '/getnews',
        method: 'GET',
        config: {
            auth: 'jwt',
        },
        handler: NewsController.all,
    }
];