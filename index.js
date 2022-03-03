const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');


const pathStaticDir = path.join(__dirname, './views');
app.use(express.static(pathStaticDir));
app.set('view engine', 'pug');
app.set('views', './views'); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

   //GET Method 
app.get('/form', function(req,res){
  var temp = JSON.parse(JSON.stringify(req.query)); 
    //console.log(temp);
    res.render('form',{
    "data" : temp
  });
});

//POST Method
app.post('/form', function(req,res) {
  res.render('form',{
    data : req.body
  });
});

app.listen(250);









// var http = require('http');



