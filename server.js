// requires etc
const express = require('express'),
app = express(),
path = require('path'),
bodyParser = require('body-parser'),
port = process.env.PORT || 2017;

// uses
app.use(express.static ('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.listen(port, function(){
  console.log('server up on 2017');
});

app.get('/', function(req, res){
  console.log('base url hit');
res.sendFile(path.resolve('public/views/index.html'));
});
