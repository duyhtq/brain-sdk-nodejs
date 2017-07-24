## SDK for Brain
A small library that support 2 methods to call brain.

## ## Installation
`npm install @duyhtq/brain-sdk-nodejs`

## ## Usage
var brain = require('');

## #### sendSensor
var jsonData = {a:1,b:2,c:3};
brain.sendSensor(jsonData);

## #### sendSensorForResult
var jsonData = {a:1,b:2,c:3};
brain.sendSensorForResult(jsonData, function(err, data){
  console.log(data);
});


