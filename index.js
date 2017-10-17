import express from 'express';

import router from './api/routing/routing';
import jwt from './config/jwt';

const app = express();

app.use(express.json());
// app.use(jwt);

app.use('/api', router);

app.listen(3000);

console.log('Server started on port 3000');
