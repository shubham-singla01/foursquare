const express = require('express');
var bodyParser   = require('body-parser');
const app = express();
var foursquare=require('./foursquare');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.post('/search', function (req, res) {
  foursquare(req,res);
});

app.listen(8080, function () {
  console.log('App listening on port 8080!')
})