var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});

var items =
    [
        {name:'eth_usd', val: '123.23'},
        {name:'nmc_usd', val: '3364.2'},
        {name:'ppc_usd', val: '1213.3'},
        {name:'cam_usd', val: '12723.2'},
        {name:'cann_usd', val: '13423.23'},
        {name:'uro_usd', val: '13223'},
        {name:'opal_usd', val: '13.25'},
        {name:'via_usd', val: '53.26'},
        {name:'sdc_usd', val: '123.27'},
        {name:'btc_usd', val: '253.28'}
    ];

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/", function (request, response) {
    response.send("<h2>Привет Express!</h2>");
});

app.get("/items", function (request, response) {
    response.send(items);
});

app.post("/value", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    var result = null, d = new Date();
    for (var prop in items) {
        if(items[prop].name === request.body.name) result = Number( Number(items[prop].val) + d.getTime()/items[prop].val).toFixed(2).toString();
    }
    console.log('result ', result);
    response.send(result);
});

app.listen(3001);