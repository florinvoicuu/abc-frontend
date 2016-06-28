'use strict';

var config = require('./config');

module.exports = function (app) {
    app.get('/*', (req, res) => res.sendFile(config.root + '/public/index.html'));
};