const expressLoader = require('./express');
const sentryLoader = require('./sentry');

module.exports.init = async function init({ expressApp }) {
    await sentryLoader();
    await expressLoader({ app: expressApp });
}