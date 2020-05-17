const { Router, Request, Response } = require('express');
const route = Router();
const form = require('../controllers/form');
const response = require('../controllers/response');

exports.create_form = function (req, res) {
  route.post('/createForm', form.create_form);
};

exports.delete_form = function (req, res) {
  route.post('/deleteForm', form.delete_form);
};

exports.add_response = function (req, res) {
  route.post('/addResponse', response.add_response);
};