const { Api, JsonRpc, RpcError } = require('eosjs');
const { JsSignatureProvider } = require("eosjs/dist/eosjs-jssig");
const fetch = require("node-fetch");                           
const { TextDecoder, TextEncoder } = require('util');      
const config = require('../config');

const signatureProvider = new JsSignatureProvider([config.private_key]);
const rpc = new JsonRpc(config.nodeos_url, { fetch });
const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

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
        console.error('Error while create form:', e.message);
        if (e instanceof RpcError){
            console.log(JSON.stringify(e.json, null, 2));
        }
        return e.message;
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
        console.log('Error while delete form:', e.message);
        if (e instanceof RpcError){
            console.log(JSON.stringify(e.json, null, 2));
        }
        return e.message;
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
        console.log('Error while add response:', e.message);
        if (e instanceof RpcError){
            console.log(JSON.stringify(e.json, null, 2));
        }
        return e.message;
    }
};