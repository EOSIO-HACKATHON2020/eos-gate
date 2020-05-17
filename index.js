require('dotenv').config();
let http = require('http');

http.createServer(function (req, res) {
    res.end();
}).listen(process.env.PORT, function() {
    console.log("server start at port "+process.env.PORT);
});
