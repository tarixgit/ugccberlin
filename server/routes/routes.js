const NewsController = require('../controllers/NewsController');

module.exports = [
    {
        path: '/getnews',
        method: 'GET',
        config: {
            auth: false,
        },
        handler: NewsController.all,
    },
    {
        path: '/addnews',
        method: 'POST',
        config: {
            auth: 'token',
            //auth: 
//            {
//    strategy: 'token'
  //} 
        },
        handler: () => {
            return 'ok';
            },
    }
];
