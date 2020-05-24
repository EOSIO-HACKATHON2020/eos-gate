const eosService = require('../services/eos.service');

module.exports.create_form = function (req, res) {
    console.info('\nREQUEST:', req.method, req.originalUrl, req.body);
    eosService.createForm(req.body).then(function (result) {
        res.status(200);
        console.info('\nRESPONSE:', res.statusCode, res.statusMessage);
        console.info(result);
        res.send(result);
    });
};

module.exports.delete_form = function (req, res) {
    console.info('\nREQUEST:', req.method, req.originalUrl, req.body);
    eosService.deleteForm(req.body).then(function (result) {
        res.status(200);
        console.info('\nRESPONSE:', res.statusCode, res.statusMessage);
        console.info(result);
        res.send(result);
    });
};