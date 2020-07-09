//const session = require('express-session');
//const mysql = require('mysql');
// var connection = require('./config/db');
//const router = express.Router();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const server = require('./httpexport');
const io = require('./socket');
// const http = require('http');
// const socketio = require('socket.io');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: 'true'
}));

//var secretString = Math.floor((Math.random() * 10000) + 1);
// app.use(session({
//     secret: secretString.toString(),
//     resave: false,
//     saveUninitialized: false
// }));

app.use(express.static(path.join(__dirname, 'public')));

const contacts = require('./routes/contacts');
const chats = require('./routes/chats');

app.use('/', contacts);
app.use('/chats', chats);

// const server = http.createServer(app);
// const io = socketio(server);

io.on('connection', (socket) => {

    console.log(socket);
    console.log("welcome to your chats");

});

const PORT = 3000 || process.env.PORT;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));
