const eosService = require('../services/eos.service');

module.exports.create_form = function (req, res) {
    console.info('REQUEST:',`${req.method} ${req.originalUrl} ${req.body}`);
    let result = eosService.createForm(req.body);
    res.status(200).send(result);
};

module.exports.delete_form = function (req, res) {
    console.info('REQUEST:',`${req.method} ${req.originalUrl} ${req.body}`);
    let result = eosService.deleteForm(req.body);
    res.status(200).send(result);
};