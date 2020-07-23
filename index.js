const express = require("express");
const app = express();

var list = ["gmail.com", "yahoo.com", "hotmail.com", "武汉核酸普查结果公布"];


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.listen(80, () => {

    console.log("El servidor está inicializado en el puerto 80");
    
});

app.get('/', function(req, res){

    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(list));
    
});

