export default function rest() {
    return function (req, res, next) {
        res.sendJson = function ({ message, data }) {
            let tmp = {};
            tmp.status = 'success';
            tmp.message = message || 'success';
            tmp.data = data || {};
            res.statusCode = 200;
            res.json(tmp);
        };

        res.sendError = function ({ code, message, httpStatusCode, data }) {
            httpStatusCode = httpStatusCode * 1 || 200;
            res.statusCode = httpStatusCode;

            res.json({
                message: message,
                status: 'error',
                error_code: code || 400,
                data,
            });
        };

        next();
    };
}
