## SDK for Brain
A small library that support 2 methods to call brain.

## ## Installation
`npm install @duyhtq/brain-sdk`

## ## Usage
var brain = require('');

## ## - sendSensor
```javascript
var jsonData = {a:1,b:2,c:3};
brain.sendSensor(jsonData);
```

## ## - sendSensorForResult
```javascript
var jsonData = {a:1,b:2,c:3};
brain.sendSensorForResult(jsonData, function(err, data){
  console.log(data);
});
```

## ## Tests
`npm run test`

