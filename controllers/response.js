const eosService = require('../services/eos.service');

exports.add_response = function (req, res) {
    eosService.add_response();
    res.send('NOT IMPLEMENTED: Add response');
};