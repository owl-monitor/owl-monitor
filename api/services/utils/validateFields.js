import {failResponse} from '../utils/handleResonse';

export function checkFields(res, fields, targetObj) {
    for (let i = 0; i < fields.length; i++) {
        if (typeof targetObj[fields[i]] === 'undefined') {
            return failResponse(res, 400, `field '${fields[i]}' not found`);
        }
    }

    return {
        status: true
    };
}