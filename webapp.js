var express = require('express');
var path    = require('path');

/********************* APP SETUP *****************************/
var app = express();

app.use(express.static(path.join(__dirname, 'www')));
app.listen(process.env.PORT || 8000);
