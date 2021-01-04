const eventEmitter = require('events')

// create class

class MyEmitter extends eventEmitter {

}

// Init object
const myEmitter = new MyEmitter()

// Event listener

myEmitter.on('event', ()=> console.log('event fired!'))

// Init event
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')