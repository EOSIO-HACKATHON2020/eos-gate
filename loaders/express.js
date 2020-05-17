const router = require('../routes/registry');

module.exports = async ({ app }) => {
    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    app.use('/', router.create_form);
    app.use('/', router.delete_form);
    app.use('/', router.add_response);
    return app;
}