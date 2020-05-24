const eosService = require('../services/eos.service');

module.exports.create_form = function (req, res) {
    console.info('REQUEST:', req.method, req.originalUrl, req.body);
    let result = eosService.createForm(req.body).then((result) => {
        res.body = result;
        res.status(200).end();
        console.info('RESPONSE:', res.statusCode, res.statusMessage, res.body);
    });
};

module.exports.delete_form = function (req, res) {
    console.info('REQUEST:', req.method, req.originalUrl, req.body);
    let result = eosService.deleteForm(req.body).then((result) => {
        res.body = result;
        res.status(200).end();
        console.info('RESPONSE:', res.statusCode, res.statusMessage, res.body);
    });
};