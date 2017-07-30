'use strict';

const zmq = require('zeromq');
const uuidv4 = require('uuid/v4');
var configs = require('./configs');

var SENSORS_PUSH_PULL  = configs.SENSORS_PUSH_PULL

var formatJsonData = function(data){
    if (typeof data !== 'string') {
        data = JSON.stringify(data);
    }
    return data;
}

/**
 * Send sensor to brain
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports.sendSensor = function(jsonData) {
    var pusher = zmq.socket('push');
    pusher.connect(SENSORS_PUSH_PULL);
    pusher.send(formatJsonData(jsonData));
};

/**
 * Send sensor to brain and get result.
 * @param {json string | object} jsonData
 * @param {function} callback
 * @return {timeout}
 */
// module.exports.sendSensorForResult = function(jsonData, callback, timeout = SUB_TIME_OUT) {
//     var pusher = zmq.socket('push');
//     pusher.bindSync(CHANNEL);
    

//     var subscriber = zmq.socket(zmq.SUB);
//     subscriber.connect(PUB_SENSOR_PUB_SUB);

//     var id = uuidv4();

//     jsonData['id'] = id;

//     subscriber.subscribe(id)

//     var responding = false;

//     subscriber.on('message', function(msg){
//         if (responding == true) {
//             callback(null, JSON.parse(msg));
//         } else {
//             if (msg == id) {
//                 responding = true;
//             }
//         }
//     });

//     pusher.send(formatJsonData(jsonData));

//     setTimeout(function() { 
//         subscriber.unref(); 
//         callback(new Error("No response"));
//     }, timeout);
// };