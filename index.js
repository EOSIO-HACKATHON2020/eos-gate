require('dotenv').config();
let http = require('http');
const { Api, JsonRpc, RpcError } = require('eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');
const fetch = require('node-fetch');
const { TextEncoder, TextDecoder } = require('util');
const { parse } = require('querystring');

const defaultPrivateKey = process.env.PRIV_KEY;
const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
const rpc = new JsonRpc(process.env.EOS_NODE_ENDPOINT, { fetch });
const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
const smart = {
    contract: process.env.SMART_CONTRACT,
    action: process.env.SMART_ACTION,
    user: process.env.SMART_USER,
};


function sendTxn(data) {
    // TODO
    // (async () => {
    //     const result = await api.transact({
    //         actions: [{
    //             account: smart.contract,
    //             name: smart.action,
    //             authorization: [{
    //                 actor: smart.user,
    //                 permission: 'active',
    //             }],
    //             data: {
    //                 // TODO
    //             },
    //         }]
    //     }, {
    //         blocksBehind: 3,
    //         expireSeconds: 30,
    //     });
    //     console.dir(result);
    // })();
}


http.createServer(function (req, res) {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            let data = JSON.parse(body);
            sendTxn(data);
        });
    } else {
        res.writeHead(400)
        res.end()
    }
    res.end();
}).listen(process.env.PORT, function() {
    console.log(`server start at port ${process.env.PORT}`);
});
