const form = require('../controllers/form');
const response = require('../controllers/response');

module.exports = async ({ app }) => {
    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    app.post('/form', form.create_form);
    app.delete('/form', form.delete_form);
    app.post('/response', response.add_response);
    return app;
}