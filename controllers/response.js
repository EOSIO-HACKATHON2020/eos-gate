const eosService = require('../services/eos.service');

module.exports.add_response = function (req, res) {
    console.info('REQUEST:',`${req.method} ${req.originalUrl} ${req.body}`);
    let result = eosService.addResponse(req.body);
    res.status(200).send(result);
};