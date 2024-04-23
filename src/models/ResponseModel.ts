import { ResponseStatus } from '../enums';
import { ErrorObject, HeadersObject, MetaObject } from '../types';

/**
 * Represents a response model for managing and representing response data.
 */
export class ResponseModel {
    /**
     * The status of the response ('success', 'error', 'pending', 'rejected', 'failed').
     * @private
     * @type {string}
     */
    private status: string;

    /**
     * The HTTP status code for the response.
     * @private
     * @type {number}
     */
    private code: number;

    /**
     * A human-readable message for the response.
     * @private
     * @type {string}
     */
    private message: string;

    /**
     * The main data payload for the response.
     * @private
     * @type {*}
     */
    private data: unknown;

    /**
     * An array of error objects associated with the response.
     * @private
     * @type {ErrorObject[]}
     */
    private errors: ErrorObject[];

    /**
     * Meta information associated with the response.
     * @private
     * @type {MetaObject}
     */
    private meta: MetaObject;

    /**
     * Headers associated with the response.
     * @private
     * @type {HeadersObject}
     */
    private headers: HeadersObject;

    /**
     * Creates an instance of ResponseModel.
     * @param {string} [status='success'] - The status of the response ('success', 'pending', 'rejected', 'failed').
     * @param {number} [code=200] - The HTTP status code for the response.
     * @param {string} [message=''] - The message for the response.
     * @param {unknown} [data=null] - The main data payload for the response.
     * @param {ErrorObject[]} [errors=[]] - An array of error objects associated with the response.
     * @param {MetaObject} [meta={}] - Meta information associated with the response.
     * @param {HeadersObject} [headers={}] - Headers associated with the response.
     */
    constructor(
        status: string = ResponseStatus.SUCCESS,
        code: number = 200,
        message: string = '',
        data: unknown = undefined,
        errors: ErrorObject[] = [],
        meta: MetaObject = {},
        headers: HeadersObject = {}
    ) {
        this.status = status;
        this.code = code;
        this.message = message;
        this.data = data;
        this.errors = errors;
        this.meta = meta;
        this.headers = headers;
    }

    /**
     * Gets the status of the response.
     * @returns {string} The status of the response.
     */
    public getStatus(): string {
        return this.status;
    }

    /**
     * Sets the status of the response.
     * @param {string} status - The status to set ('success', 'pending', 'rejected', 'failed').
     */
    public setStatus(status: string): void {
        this.status = status;
    }

    /**
     * Gets the HTTP status code for the response.
     * @returns {number} The HTTP status code.
     */
    public getCode(): number {
        return this.code;
    }

    /**
     * Sets the HTTP status code for the response.
     * @param {number} code - The message to set.
     */
    public setCode(code: number): void {
        this.code = code;
    }

    /**
     * Gets the message for the response.
     * @returns {string} The message to get.
     */
    public getMessage(): string {
        return this.message;
    }

    /**
     * Sets the main message for the response.
     * @param {string} message - The main data payload to set.
     */
    public setMessage(message: string): void {
        this.message = message;
    }

    /**
     * Gets the main data payload for the response.
     * @returns {*} The main data payload.
     */
    public getData(): unknown {
        return this.data;
    }

    /**
     * Sets the main data payload for the response.
     * @param {*} data - The main data payload to set.
     */
    public setData(data: unknown): void {
        this.data = data;
    }

    /**
     * Gets the array of error objects associated with the response.
     * @returns {ErrorObject[]} The array of error objects.
     */
    public getErrors(): ErrorObject[] {
        return this.errors;
    }

    /**
     * Sets the array of error objects associated with the response.
     * @param {ErrorObject[]} errors - The array of error objects to set.
     */
    public setErrors(errors: ErrorObject[]): void {
        this.errors = errors;
    }

    /**
     * Gets the meta information associated with the response.
     * @returns {MetaObject} The meta information.
     */
    public getMeta(): MetaObject {
        return this.meta;
    }

    /**
     * Sets the meta information associated with the response.
     * @param {MetaObject} meta - The meta information to set.
     */
    public setMeta(meta: MetaObject): void {
        this.meta = meta;
    }

    /**
     * Gets the headers associated with the response.
     * @returns {HeadersObject} The headers.
     */
    public getHeaders(): HeadersObject {
        return this.headers;
    }

    /**
     * Sets the headers associated with the response.
     * @param {HeadersObject} headers - The headers to set.
     */
    public setHeaders(headers: HeadersObject): void {
        this.headers = headers;
    }

    /**
     * Converts the response model to a JSON object.
     * @returns {object} The JSON representation of the response model.
     */
    public toJSON(): object {
        let data: object = {
            status: this.status,
            code: this.code,
            message: this.message,
        };

        if (this.data !== undefined) {
            data = {
                ...data,
                data: this.data,
            };
        }

        if (this.errors.length > 0) {
            data = {
                ...data,
                errors: this.errors,
            };
        }

        if (Object.keys(this.meta).length > 0) {
            data = {
                ...data,
                meta: this.meta,
            };
        }

        if (Object.keys(this.headers).length > 0) {
            data = {
                ...data,
                headers: this.headers,
            };
        }

        return data;
    }

    /**
     * Checks if the response is a success.
     * @returns {boolean} True if the response is a success, false otherwise.
     */
    public isSuccess(): boolean {
        return this.status === ResponseStatus.SUCCESS;
    }

    /**
     * Checks if the response is an error.
     * @returns {boolean} True if the response is an error, false otherwise.
     */
    public isError(): boolean {
        return this.status === ResponseStatus.ERROR;
    }

    /**
     * Checks if the response is pending.
     * @returns {boolean} True if the response is pending, false otherwise.
     */
    public isPending(): boolean {
        return this.status === ResponseStatus.PENDING;
    }

    /**
     * Checks if the response is rejected.
     * @returns {boolean} True if the response is rejected, false otherwise.
     */
    public isRejected(): boolean {
        return this.status === ResponseStatus.REJECTED;
    }

    /**
     * Checks if the response has failed.
     * @returns {boolean} True if the response has failed, false otherwise.
     */
    public isFailed(): boolean {
        return this.status === ResponseStatus.FAILED;
    }
}
