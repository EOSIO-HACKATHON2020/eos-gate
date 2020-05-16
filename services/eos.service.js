const { Api, JsonRpc } = require("eosjs");
const { JsSignatureProvider } = require("eosjs/dist/eosjs-jssig"); // development only
const nodeFetch = require("node-fetch"); //node only
const util = require("util"); //node only
const config = require('../config');

const signatureProvider = new JsSignatureProvider(config.prv_key);
const rpc = new JsonRpc(config.nodeosURL, { fetch });
const api = new Api({ rpc, signatureProvider });

exports.createForm = async function (formName, questionsList) {
    try {
        await api.transact({
            actions: [{
                account: config.contractAccount,
                name: 'createform',
                authorization: [{
                    actor: config.contractAccount,
                    permission: 'active',
                }],
                data: {
                    form: formName,
                    questions: questionsList,
                }
            }]
        }, {
            blocksBehind: 3,
            expireSeconds: 30,
        }).then(function (result) {
            console.info('transaction_id is : ', result.transaction_id);
        })
    } catch (e) {
        console.error('Error while create form', e);
    }
};

exports.deleteForm = async function (formName) {
    try {
        await api.transact({
            actions: [{
                account: config.contractAccount,
                name: 'deleteform',
                authorization: [{
                    actor: config.contractAccount,
                    permission: 'active',
                }],
                data: {
                    form: formName
                }
            }]
        }, {
            blocksBehind: 3,
            expireSeconds: 30,
        }).then(function (result) {
            console.info('transaction_id is : ', result.transaction_id);
        })
    } catch (e) {
        console.error('Error while delete form', e);
    }
};

exports.addResponse = async function (formName, answersList) {
    try {
        await api.transact({
            actions: [{
                account: config.contractAccount,
                name: 'addresponse',
                authorization: [{
                    actor: config.contractAccount,
                    permission: 'active',
                }],
                data: {
                    form: formName,
                    answers: answersList,
                }
            }]
        }, {
            blocksBehind: 3,
            expireSeconds: 30,
        }).then(function (result) {
            console.info('transaction_id is : ', result.transaction_id);
        })
    } catch (e) {
        console.error('Error while add response', e);
    }
};