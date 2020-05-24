const eosService = require('../services/eos.service');

module.exports.add_response = function (req, res) {
    console.info('REQUEST:', req.method, req.originalUrl, req.body);
    eosService.addResponse(req.body).then((result) => {
        res.body = result;
        res.status(200).end();
        console.info('RESPONSE:', res.statusCode, res.statusMessage, res.body);
    });
};