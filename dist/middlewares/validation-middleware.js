import httpStatus from 'http-status';
import { invalidDataError } from '@/errors';
export function validateBody(schema) {
    return validate(schema, 'body');
}
export function validateParams(schema) {
    return validate(schema, 'params');
}
function validate(schema, type) {
    return function (req, res, next) {
        var error = schema.validate(req[type], {
            abortEarly: false,
        }).error;
        if (!error) {
            next();
        }
        else {
            res.status(httpStatus.BAD_REQUEST).send(invalidDataError(error.details.map(function (d) { return d.message; })));
        }
    };
}
