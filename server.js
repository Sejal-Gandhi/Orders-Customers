var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
require('./server/config/mongoose.js');

var app=express();
app.use(express.static(path.join(__dirname,'./client')));
app.use(express.static(__dirname + '/node_modules'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var mongoose=require('mongoose');
var Customer=mongoose.model('Customer');
var Order=mongoose.model('Order');



require('./server/config/routes.js')(app);
app.listen(8000,function(){
	console.log('Listening to port 8000...');
})