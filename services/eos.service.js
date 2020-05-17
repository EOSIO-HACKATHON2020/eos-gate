const { Api, JsonRpc } = require("eosjs");
const { JsSignatureProvider } = require("eosjs/dist/eosjs-jssig"); // development only
const fetch = require("node-fetch"); //node only
const util = require("util"); //node only
const config = require('../config');

const signatureProvider = new JsSignatureProvider([config.private_key]);
const rpc = new JsonRpc(config.nodeos_url, { fetch });
const api = new Api({ rpc, signatureProvider });

module.exports.createForm = async function (body) {
    try {
        await api.transact({
            actions: [{
                account: config.contract_account,
                name: 'createform',
                authorization: [{
                    actor: config.contract_account,
                    permission: 'active',
                }],
                data: body
            }]
        }, {
            blocksBehind: 3,
            expireSeconds: 30,
        }).then(function (result) {
            console.info('transaction_id is : ', result.transaction_id);
            return result.transaction_id;
        })
    } catch (e) {
        console.error('Error while create form:', e);
        return e;
    }
};

module.exports.deleteForm = async function (body) {
    try {
        await api.transact({
            actions: [{
                account: config.contract_account,
                name: 'deleteform',
                authorization: [{
                    actor: config.contract_account,
                    permission: 'active',
                }],
                data: body
            }]
        }, {
            blocksBehind: 3,
            expireSeconds: 30,
        }).then(function (result) {
            console.info('transaction_id is : ', result.transaction_id);
            return result.transaction_id;
        })
    } catch (e) {
        console.error('Error while delete form:', e);
        return e;
    }
};

module.exports.addResponse = async function (body) {
    try {
        await api.transact({
            actions: [{
                account: config.contract_account,
                name: 'addresponse',
                authorization: [{
                    actor: config.contract_account,
                    permission: 'active',
                }],
                data: body
            }]
        }, {
            blocksBehind: 3,
            expireSeconds: 30,
        }).then(function (result) {
            console.info('transaction_id is : ', result.transaction_id);
            return result.transaction_id;
        })
    } catch (e) {
        console.error('Error while add response:', e);
        return e;
    }
};