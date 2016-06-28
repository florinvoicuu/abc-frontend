
'use strict';

var express  = require('express');

var config        = require('./config/config');
var configExpress = require('./config/express');
var configRoutes  = require('./config/routes');


var app = express();

configExpress(app, express);
configRoutes(app, express);

var server = app.listen(config.port, function () {
    return console.log(`radio-abc.ro listening on port ${config.port} in ${config.env} mode`);
});

module.exports = server;