const eosService = require('../services');

exports.add_response = function(req, res) {
    eosService.add_response();
    res.send('NOT IMPLEMENTED: Add response');
};