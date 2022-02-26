var express = require('express');
var app = express();
var proxy = require('http-proxy-middleware');

app.use(express.static('public'));
app.use(proxy.createProxyMiddleware('/', {target: 'http://localhost:3000'}));

app.listen(8081, () => {
    console.log('Server is up on port ' + 8081);
})