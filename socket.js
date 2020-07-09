const server = require('./httpexport');
const socketio = require('socket.io');
const io = socketio(server);

module.exports = io;