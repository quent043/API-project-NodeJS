const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {

    if(req.body.isAdmin) delete req.body.isAdmin;
    next();
    // if(req.body.isAdmin) {
    //     const token = req.header('x-auth-token');
    //     if(!token) {
    //         delete req.body.isAdmin;
    //         console.log(`req 1- `, req.body);
    //         next();
    //     } else
    //     try {
    //         const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    //         // console.log(`decoded token ${decoded}`);
    //         if (decoded.isAdmin) next();
    //         delete req.body.isAdmin;
    //         console.log(`req 2- `, req.body);
    //         next();
    //     } catch (ex) {
    //         delete req.body.isAdmin;
    //         console.log(`req 3- `, req.body);
    //         next();
    //     }
    // }
}