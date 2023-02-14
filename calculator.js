const express = require("express");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var ans = num1+num2;
    res.send("The result of the variables = "+ans);
});



app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/bmicalculator",function(req,res){
    var n1 = parseFloat(req.body.n1);
    var n2 = parseFloat(req.body.n2);
    var ans = n1/(n2*n2);
    res.send("The result of the BMI = "+ans);
});

app.listen(3000,function(){
    console.log("Server is started on 3000");
});