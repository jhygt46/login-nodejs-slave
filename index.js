const express = require("express");
const app = express();

var list = ["gmail.com"];

app.listen(80, () => {

    console.log("El servidor está inicializado en el puerto 80");
    
});

app.get('/', function(req, res){

    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(list));
    
});