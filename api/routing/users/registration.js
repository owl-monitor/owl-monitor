import express from 'express';

import dataBase from '../../../config/db';
import { checkFields } from '../../services/utils/validateFields';
import { queryInsertUser, queryFindEmail } from '../../services/query/users_collection';
import { failResponse, finishResponse } from '../../services/utils/handleResonse';

const router = express.Router();

router.post('/registration', async (req, res) => {
    const db = dataBase();
    const field = ["name", "age", "password", "email"];
    const user = req.body;

    checkFields(res, field, user);

    if (await queryFindEmail(db, user.email) !== null) {
        return failResponse(res, 400, `email already exists, ${user.email}`);
    }

    queryInsertUser(db, user)
        .then((queryResult) => {
            const user = queryResult.ops[0];

            finishResponse(res, 200, user);
        })
        .catch((err) => failResponse(res, 500, 'register fail'));
});

export default router;