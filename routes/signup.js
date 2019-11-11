var express = require('express');
var router = express.Router();
var fs = require('fs');

// define the home page route
router.post('/', function (req, res) {
    console.log(req.body);
    var user = {
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password
    };
    checkAndAddUser(user);
    // res.addHeader("Access-Control-Allow-Origin", "*");
    
    if(user){
        res.send(user.firstname + "'s sign-up complete!!");
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
        users[newUser] = {
            firstname : user.firstname,
            lastname : user.lastname,
            password : user.password
        };
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