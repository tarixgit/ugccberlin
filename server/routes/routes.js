const NewsController = require('../controllers/NewsController');

module.exports = [
    {
        path: '/getnews',
        method: 'GET',
        handler: NewsController.all,
    }
];