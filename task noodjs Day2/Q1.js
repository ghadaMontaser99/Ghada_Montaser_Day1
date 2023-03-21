//problem1
var Emitter = require('events')
var utils = require('util')

function Func(){}
utils.inherits(Func, Emitter);
Func.prototype.greet = function(data){
	this.emit('greet', data)
}

var grt = new Func();

grt.on('greet', function(greet){
	console.log('My Name is ' + greet)
})
grt.greet('Ghada')