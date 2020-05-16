import { Router, Request, Response } from 'express';
const route = Router();
const registry = require('../controllers');

exports.create_form = function (req, res) {
  route.post('/createForm', registry.create_form);
};

exports.delete_form = function (req, res) {
  route.post('/deleteForm', registry.delete_form);
};

exports.add_response = function (req, res) {
  route.post('/addResponse', registry.add_response);
};