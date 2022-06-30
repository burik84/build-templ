const Emitter = require('events');
const { Http2ServerRequest } = require('http2');

const emitter = new Emitter();

const callback = (data, second, third) => {
  console.log(`Вы прислали сообщение ${data}`);
  console.log(`Второй аргумент ${second}`);
};

emitter.on('message', callback);

emitter.removeListener('message', callback);

const MESSAGE = process.env.message || '';
if (MESSAGE) {
  emitter.emit('message', MESSAGE, 123);
} else {
  emitter.emit('message', 'Вы не указали аргументы');
}

//  Когда удобно использовать???
//  Http
//  websockets
//  long pulling
//  clusters

// Для вызова с сообщением
// cross-env MESSAGE="message fdfdd0 0" node .\lessons\05_events.js