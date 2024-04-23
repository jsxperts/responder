import { Response as ExpressResponse } from 'express';
import { ErrorObject } from './types';
import { ResponseBuilder } from './builders';
import { ResponseStatus, StatusCode } from './enums';

/**
 * Export of ResponseBuilder class from the builders module.
 */
export { ResponseBuilder } from './builders';

/**
 * Export of StatusCode, StatusMessage, and ResponseStatus enums from the enums module.
 */
export { StatusCode, StatusMessage, ResponseStatus } from './enums';

/**
 * Export of ResponderMiddleware class from the middlewares module.
 */
export { ResponderMiddleware } from './middlewares';

/**
 * Helper function to create a ResponseBuilder instance.
 * @param {ExpressResponse} res - The Express response object.
 * @param {number} code - The HTTP status code for the response.
 * @param {string} status - The status of the response.
 * @param {string} message - The message associated with the response.
 * @param {unknown} data - The data payload associated with the response.
 * @param {ErrorObject[]} errors - The array of error objects associated with the response.
 * @returns {ResponseBuilder} A new instance of ResponseBuilder.
 */
export const responder = function (
    res: ExpressResponse,
    code: number = StatusCode.OK,
    status: string = ResponseStatus.SUCCESS,
    message: string = '',
    data: unknown = undefined,
    errors: ErrorObject[] = []
): ResponseBuilder {
    return new ResponseBuilder(res, code, status, message)
        .code(code)
        .status(status)
        .message(message)
        .data(data)
        .errors(errors);
};
