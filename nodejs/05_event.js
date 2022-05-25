// const EventEmitter = require('events');
const Logger = require('./log');

const logger=new Logger()

// const emitter = new EventEmitter();

logger.on('some_event', (args) => {
  const {id,text}=args
  console.log(id, text);
});

logger.log('User Logged!')
