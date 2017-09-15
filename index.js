var express	= require('express');
var app	= express();
var bodyParser=require('body-parser');

app.set('num',1);
var num = app.get('num');
console.log(num); //1

app.use(function(req,res,next){
	console.log('Record	timestamp');
	next();
});

app.use(bodyParser.json());

app.post('/calculator/rest/multiply',function(req,res,next){
	var body=req.body;
        var x=body.x;
        var y=body.y;
        var result=0;
        var object={
            "x" : x,
            "y" : y,
            "result X multiply Y" : x*y
        }
        res.json(object);
});

app.post('/calculator/rest/divide',function(req,res,next){
	var body=req.body;
        var x=body.x;
        var y=body.y;
        var result=0;
        var object={
            "x" : x,
            "y" : y,
            "result X DIVIDE Y" : x/y
        }
        res.json(object);
});

app.post('/calculator/rest/power2',function(req,res,next){
	var body=req.body;
        var x=body.x;
        var y=body.y;
        var result=0;
        var object={
            "x" : x,
            "y" : y,
            "result X power 2" : x*x ,
            "result Y power 2" : y*y
        }
        res.json(object);
});


app.listen(3000);