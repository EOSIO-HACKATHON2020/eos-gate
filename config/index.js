const dotenv = require('dotenv');

dotenv.config();

export default {
    port: process.env.PORT,
    nodeosURL: process.env.EOS_URI,
    contractAccount: process.env.CONTRACT_ACCOUNT,
    prvKey: process.env.PRV_KEY
}