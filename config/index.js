const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.PORT,
    nodeos_url: process.env.EOS_URI,
    contract_account: process.env.CONTRACT_ACCOUNT,
    private_key: process.env.PRV_KEY
}