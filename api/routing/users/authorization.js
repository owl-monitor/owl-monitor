import express from 'express';

import dataBase from '../../../config/db';
import { checkFields } from '../../services/utils/validateFields';
import { failResponse, finishResponse } from '../../services/utils/handleResonse';
import { queryFindEmail } from '../../services/query/users_collection';

const router = express.Router();

router.post('/authorization', async (req, res) => {
    const db = dataBase();
    const field = ["password", "email"];
    const authCredentials = req.body;

    checkFields(res, field, authCredentials);

    const userResult = await queryFindEmail(db, authCredentials.email);

    if (userResult === null) {
        return failResponse(res, 401, `user not found`);
    }

    if (userResult.password === authCredentials.password) {
        return finishResponse(res, 200, userResult);
    } else {
        return failResponse(res, 401, 'don`t correct password');
    }
});

export default router;