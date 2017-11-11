module.exports = [
    {
        path: '/tarix',
        method: 'GET',
        handler: function (request, h) {
            //response = h.entity;
             /*
             const response = h.entity({ etag: 'abc' });
            if (response) {
                response.header('X', 'y');
                return response;
            }
            */
            return { name: 'John' };
        }
    }
];