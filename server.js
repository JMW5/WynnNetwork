var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongod://localhost:27017/socialnetwork');


app.get('/', function(req, res){
   res.sendFile('index');
});









app.listen(3000, function(){
  console.log("Your app is running on localhost:3000");
})
