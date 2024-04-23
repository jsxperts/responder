import { Response as ExpressResponse } from 'express';
import { ResponseModel } from '../models';
import { ResponseStatus, StatusCode } from '../enums';
import { ErrorObject, HeadersObject, MetaObject } from '../types';

/**
 * ResponseBuilder class for building and sending response.
 * @class ResponseBuilder
 */
export class ResponseBuilder {
    /**
     * The response model instance.
     * @private
     * @type {ResponseModel}
     */
    private readonly model: ResponseModel;

    /**
     * The Express response object.
     * @private
     * @type {ExpressResponse}
     */
    private readonly res: ExpressResponse;

    /**
     * Constructs a new ResponseBuilder instance.
     * @param {ExpressResponse} res - The Express response object.
     * @param {number} code - The HTTP status code for the response.
     * @param {string} status - The status of the response.
     * @param {string} message - The message associated with the response.
     * @param {unknown} data - The data payload associated with the response
     * @param {ErrorObject[]} errors - The array of error objects associated with the response.
     */
    constructor(
        res: ExpressResponse,
        code: number = StatusCode.OK,
        status: string = ResponseStatus.SUCCESS,
        message: string = '',
        data: unknown = undefined,
        errors: ErrorObject[] = []
    ) {
        this.res = res;
        this.model = new ResponseModel();
        this.model.setCode(code);
        this.model.setStatus(status);
        this.model.setMessage(message);
        this.model.setData(data);
        this.model.setErrors(errors);
    }

    /**
     * Sends a success response.
     * @returns {ExpressResponse} The Express response object.
     */
    public success(): ExpressResponse {
        this.model.setStatus(ResponseStatus.SUCCESS);
        return this.res.status(this.model.getCode()).send(this.model.toJSON());
    }

    /**
     * Sends an error response.
     * @returns {ExpressResponse} The Express response object.
     */
    public error(): ExpressResponse {
        this.model.setStatus(ResponseStatus.ERROR);
        return this.res.status(this.model.getCode()).send({
            code: 500,
            status: ResponseStatus.ERROR,
            message: 'Internal Server Error!',
            ...this.model.toJSON(),
        });
    }

    /**
     * Sends a pending response.
     * @returns {ExpressResponse} The Express response object.
     */
    public pending(): ExpressResponse {
        this.model.setStatus(ResponseStatus.PENDING);
        return this.res.status(this.model.getCode()).send(this.model.toJSON());
    }

    /**
     * Sends a rejected response.
     * @returns {ExpressResponse} The Express response object.
     */
    public rejected(): ExpressResponse {
        this.model.setStatus(ResponseStatus.REJECTED);
        return this.res.status(this.model.getCode()).send(this.model.toJSON());
    }

    /**
     * Sends a failed response.
     * @returns {ExpressResponse} The Express response object.
     */
    public failed(): ExpressResponse {
        this.model.setStatus(ResponseStatus.FAILED);
        return this.res.status(this.model.getCode()).send(this.model.toJSON());
    }

    /**
     * Sets the HTTP status code for the response.
     * @param {number} value - The HTTP status code.
     * @returns {this} The ResponseBuilder instance.
     */
    public code(value: number): this {
        this.model.setCode(value);
        return this;
    }

    /**
     * Sets the status of the response.
     * @param {string} value - The status of the response.
     * @returns {this} The ResponseBuilder instance.
     */
    public status(value: string): this {
        this.model.setStatus(value);
        return this;
    }

    /**
     * Sets the message associated with the response.
     * @param {string} value - The message associated with the response.
     * @returns {this} The ResponseBuilder instance.
     */
    public message(value: string): this {
        this.model.setMessage(value);
        return this;
    }

    /**
     * Sets the data payload of the response.
     * @param {unknown} value - The data payload.
     * @returns {this} The ResponseBuilder instance.
     */
    public data(value: unknown): this {
        this.model.setData(value);
        return this;
    }

    /**
     * Sets the error objects associated with the response.
     * @param {ErrorObject[]} value - The error objects.
     * @returns {this} The ResponseBuilder instance.
     */
    public errors(value: ErrorObject[]): this {
        this.model.setErrors(value);
        return this;
    }

    /**
     * Sets the meta information associated with the response.
     * @param {MetaObject} value - The meta information.
     * @returns {this} The ResponseBuilder instance.
     */
    public meta(value: MetaObject): this {
        this.model.setMeta(value);
        return this;
    }

    /**
     * Sets the headers associated with the response.
     * @param {HeadersObject} value - The headers.
     * @returns {this} The ResponseBuilder instance.
     */
    public headers(value: HeadersObject): this {
        this.model.setHeaders(value);
        return this;
    }
}
