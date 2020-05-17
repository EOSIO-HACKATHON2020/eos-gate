const expressLoader = require('./express');

module.exports.init = async function init({ expressApp }) {
    await expressLoader({ app: expressApp });
    console.log('Express Intialized');
}