const eosService = require('../services/eos.service');

module.exports.add_response = function (req, res) {
    console.info('\nREQUEST:', req.method, req.originalUrl, req.body);
    eosService.addResponse(req.body).then(function (result) {
        res.body = result;
        res.status(200).end();
        console.info('\nRESPONSE:', res.statusCode, res.statusMessage);
        console.info(res.body);
    });
};