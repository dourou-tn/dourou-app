const moment = require('moment-timezone');

moment.tz.setDefault('Africa/Tunis');

let io = null;

if (!io) {
  io = require("socket.io")(3001, {
    cors: { origin: '*' },
  });
}

const START_TIME = '2021-11-26 19:00';

io.on('connection', (socket) => {
  console.log('someone connected');

  io.emit('heartbeat', { startTime: START_TIME, countDown: moment(START_TIME) - moment() })


  socket.on('disconnect', () => {
    // console.log('Disconencted from socket');
    console.log('disconnect from socket');
  });

})


process.on('exit', () => {
  io.close();
  console.log('Process exited')
})

export default function (req, res, next) {
  next()
}
