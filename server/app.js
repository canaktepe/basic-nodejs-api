var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var history = require('connect-history-api-fallback');

var apiRouter = require('./api-router');

var app = express();
// app.use(history());
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './client/dist')));

app.use('/api', apiRouter);

module.exports = app;
