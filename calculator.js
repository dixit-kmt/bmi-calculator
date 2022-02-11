const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmi", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/", function(req, res){
  console.log(req.body);
  var a = Number(req.body.num1);
  var b = Number(req.body.num2);
  var s = a + b;
  res.send("Sum of " + a +" and " + b + " is " + (a+b) );
});

app.post("/bmi", function(req, res){
  console.log(req.body);
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var yourBMI = weight/Math.pow(height,2);
  res.send("BMI is "+ yourBMI)
})

app.listen(3000, function(){
  console.log("Server started");
  console.log("http://127.0.0.1:3000/")
});
