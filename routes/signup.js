var express = require('express');
var router = express.Router();
var fs = require('fs');

// define the home page route
router.post('/', function (req, res) {
    console.log(req.body);
    var user = {
        username: req.body.username,
        password: req.body.password
    };
    checkAndAddUser(user);
    if(user){
        res.send(user.username + "'s sign-up complete!!");
    } else {
        res.send('Username already taken.. signup failed');
    }
    
});

function checkAndAddUser(user){
    var rawdata = fs.readFileSync('./database/users.json');
    var users = JSON.parse(rawdata);
    var newUser = user.username;
    if(users.hasOwnProperty(newUser)){
        console.log('This username is already taken.. try again');
        user = null;
    } else {
        users[newUser] = user.password;
        fs.writeFile('./database/users.json', JSON.stringify(users), function (err) {
            if (err) {
            console.error('unable to sign up');
            } else {
            console.log('user created');
            }
        });
    }
}

module.exports = router;