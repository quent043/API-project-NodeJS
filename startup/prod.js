let helmet = require('helmet');
let compression = require('compression');

module.exports = function (app) {
    app.use(helmet());
    app.use(compression());
}
