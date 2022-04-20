'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {
    res.send({ message: 'Welcome to my application' });
});

app.get('/api', function (req, res) {
    res.send({ message: 'please enter your credentials' });
});

app.listen(3000, function () {
    console.log("App is listening on port 3000!!!");
});

exports.default = app;