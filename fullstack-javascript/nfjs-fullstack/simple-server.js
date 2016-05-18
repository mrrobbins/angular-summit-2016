var io = require('socket.io')(8080);
io.on('connection', function (socket) {
    console.log('connection');
    socket.on('hello', function (msg) {
        console.log('somebody else is saying hello ... *eyeroll*');
        socket.emit('hello back', {
            some: 'payload'
        });
    });
    var count = 0;
    socket.on('ping', function() {
        console.log('recieved ping');
        ++count;
       socket.emit('push-msg', 'abc');
    });
});