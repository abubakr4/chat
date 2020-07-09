//var connection = require('../config/db');
//var bodyParser = require('body-parser');
//var multer = require('multer');
//var Objects = require('../objects');
//var uploads = multer({dest: "Uploads"});
const express = require('express');
var session = require('express-session');
var router = express.Router();
var secretString = Math.floor((Math.random() * 10000) + 1);

router.use(session({
    secret: secretString.toString(),
    resave: false,
    saveUninitialized: false
}));

router.get('/', (req, res) => {
    var user_info = {
            'username' : "lindani",
            'Email' : "email@email.com",
            'Firstname' : "Lindani",
            'Lastname' : "Shabangu",
            'profile_pic' : "non",
            'complete' : "1"
        }
    console.log("chats.js");
    res.render('chats', {user_info});
})

router.post('/', (req, res) => {
    var user_info = {
            'username' : "lindani",
            'Email' : "email@email.com",
            'Firstname' : "Lindani",
            'Lastname' : "Shabangu",
            'profile_pic' : "non",
            'complete' : "1"
        }
    
    console.log("post chats.js");
    res.render('chats', {user_info});
})

module.exports = router
