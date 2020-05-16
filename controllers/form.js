const eosService = require('../services');

exports.create_form = function (req, res) {
    eosService.create_form();
    res.send('NOT IMPLEMENTED: Create form');
};

exports.delete_form = function (req, res) {
    eosService.delete_form();
    res.send('NOT IMPLEMENTED: Delete form');
};