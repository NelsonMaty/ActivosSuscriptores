var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = "asset_lc.txt";

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.post('/', function (req, res) {
  var log = req.body.timestamp +": El activo '"+req.body.assetId+"' cambio del estado '"+req.body.oldStatus+"' al estado '"+req.body.newStatus+"'.\n";
  fs.appendFile(path, log, function (err) {
    res.sendStatus(200);
  });
});

app.listen(9000, function () {
  console.log('Logger app listening on port 9000!');
});
