'use strict';

const zmq = require('zeromq');
var configs = require('../configs');

var SENSORS_PUSH_PULL  = configs.SENSORS_PUSH_PULL

var expect = require('chai').expect;
var sdk = require('../index');

var puller = zmq.socket('pull');
puller.connect(SENSORS_PUSH_PULL);

var globalResult = '';
puller.on('message', function(msg){
    globalResult = msg
});

describe('#sendSensor', function() {
    it('should receive msg', function() {
        sdk.sendSensor('testing');
        setTimeout(function(){
            expect(globalResult).to.equal('testing');
        }, 1000);
    });
});