const eventEmitter = require("events");
const uuid = require("uuid");

// console.log(uuid.v4()) example: d8d1cc46-53f9-41f7-892f-7566ccf5c365

// create class logger

class Logger extends eventEmitter {
  log(msg) {
    // call event
    this.emit("message", { id: uuid.v4(), msg });
  }
}


// module.exports = Logger;

// Logger
const Logger = require('./logger')

const logger = new Logger()

logger.on('message', (data)=> console.log('called listener:', data))

logger.log('Hello World!')
// output: called listener: { id: '36c89f6e-d9a2-4af0-8f7c-2df241b5107a', msg: 'Hello World!' }