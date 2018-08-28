var express = require('express');
const cors = require('cors')();
var path = require('path');

var browserHistory = require('./middlewares/browserHistory');
var proxy = require('./middlewares/proxy');

var app = express();

app.use(cors);
app.use('/api', proxy);
app.use(express.static(path.join(__dirname, 'public')));
app.use(browserHistory);

module.exports = app;
