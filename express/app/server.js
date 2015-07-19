var express = require('express');
var app = express();
var request = require('request');

function isAdmin(req, res, next) {
    console.log(req);
    if (req.user.isAdmin === 'undefined') {
    };
    next();
}

app.get('/', function getHome(req, res){
    res.status(200).send('success');
});

app.get('/admin', function getAdmin(req, res){
    res.status(403).send('forbidden');

});

console.log('server starting on port 3002');
app.listen(3002)

