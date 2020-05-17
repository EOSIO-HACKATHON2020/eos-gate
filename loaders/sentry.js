const Sentry = require('@sentry/node');
const config = require('../config');

module.exports = async () => {
    Sentry.init({ dsn: config.sentry_url });
};