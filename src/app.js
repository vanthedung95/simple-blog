var express = require('express');

import rest from './middleware/rest';
import routes from './routes/index';
import config from './config';
import ExtendableError from './middleware/error';

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

global['AppError'] = ExtendableError;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(rest());
app.use(cookieParser());
app.use('/', routes);
app.listen(config.HTTP.port, () => {
    console.log('\n\nStart server at :  ' + new Date());
    console.log(
        `HTTP server is listening at:   ${config.HTTP.host}:${config.HTTP.port}`
    );
});
module.exports = app;
