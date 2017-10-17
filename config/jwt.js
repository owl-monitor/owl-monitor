import jwt from 'express-jwt';

const jwtService = jwt({
    secret: 'temporary_secret_key_test1223334444_911'
}).unless({
    path: [
        '/api/users/registration'
    ]
});

export default jwtService;
