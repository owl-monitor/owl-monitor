import express from 'express';

import registration from './users/registration';
import authorization from './users/authorization';

const router = express.Router();

router.use('/users', registration);
router.use('/users', authorization);

export default router;