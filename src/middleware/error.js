export default class ExtendableError extends Error {
    constructor(/** @type {ExtendableErrorArgs} */ { code, message, data }) {
        code = code || 400;

        message = message || '';

        super(message);
        this.name = this.constructor.name;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = new Error(message).stack;
        }
        this.code = code;
        this.data = data;
    }
}
