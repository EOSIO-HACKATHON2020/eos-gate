const Sentry = require('@sentry/node');
const form = require('../controllers/form');
const response = require('../controllers/response');
const bodyParser = require('body-parser');

module.exports = async ({ app }) => {
    app.use(bodyParser.json());
    app.use(Sentry.Handlers.requestHandler());
    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    app.post('/form', form.create_form);
    app.delete('/form', form.delete_form);
    app.post('/response', response.add_response);
    app.get('/debug-sentry', function mainHandler(req, res) {
        throw new Error('My first Sentry error from eos-gate!');
      });
    app.use(Sentry.Handlers.errorHandler());
    return app;
}