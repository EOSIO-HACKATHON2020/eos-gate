import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

const router = require('../routes');

export default async ({ app }) => {

    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    app.enable('trust proxy');

    app.use(cors());
    app.use(require('morgan')('dev'));
    app.use(bodyParser.urlencoded({ extended: false }));

    return app;
}