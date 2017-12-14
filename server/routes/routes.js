const NewsController = require('../controllers/NewsController');

module.exports = [
    {
        path: '/getnews',
        method: 'GET',
        config: {
            handler: NewsController.all,
        }

    }
];