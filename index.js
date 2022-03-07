const winston = require('winston');
const express = require('express');
const config = require("config");
const app = express();

require('./startup/logging')();
require("./startup/cors")(app);
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
//Could put conditions to use this only in prod here
require('./startup/prod')(app);

const port = config.get('port') || 3000;
// const port = 3000;
const server = app.listen(port, () => {
    winston.info(`Listening on port ${port}...`)
    winston.info(`JWT key ${config.get("jwtPrivateKey")}...`)
});

module.exports = server;
