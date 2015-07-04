var express = require('express');
var app = express();
var request = require('request');

app.get('/', function getHome(req, res){
    res.send('success');
});

console.log('server starting on port 3000');
app.listen(3000)

