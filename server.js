var fs = require('fs');
var express = require('express');
var url = require('url');
var path = require('path');
var app = express();




app.use('/public', express.static(path.join(__dirname ,'public')));

app.use(function(req, res, next) { 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(); 
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get('/:time',function(req, res, next){
  if(/[a-z]/gi.test(req.params.time)===false){
    var date = new Date(+req.params.time);
  }else{
    var date = new Date(req.params.time);
  }
 if(!date||date=="Invalid Date"){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({"unix":null,"natural":null}));
  }else{
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({"unix":date.getTime(),"natural":date.toDateString()}));
  }
  
});
app.use(function(request, response, next){
    console.log("In comes a "+ request.method +" to " + request.url);
    next();
});

// Respond not found to all the wrong routes
app.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('Not found');
});

// Error Middleware
app.use(function(err, req, res, next) {
  if(err) {
    res.status(err.status || 500)
      .type('txt')
      .send(err.message || 'SERVER ERROR');
  }  
})

app.listen(process.env.PORT || 5000);

