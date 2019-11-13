var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var fs = require('fs');

router.post('/', authenticateUser , (req, res) => {
    console.log(req.user);
    var token = jwt.sign({username: req.user.username},
        'my_secret_key',
        { expiresIn: '24h' }
      );
    //   var payload = jwt.verify(token, 'my_secret_key')
    //   console.log('------------------------------->' + payload.username);
      
      res.json({
        success: true,
        message: req.user.username +'\'s Login successful!',
        token: token
      });
   
});

function authenticateUser(req, res, next){
    var user = {
        username: req.body.username,
        password: req.body.password
    };
    var rawdata = fs.readFileSync('./database/users.json');
    var usersDB = JSON.parse(rawdata);
    if(usersDB.hasOwnProperty(user.username)){
      if( usersDB[user.username]["password"] == user.password ){
        req.user = user;
        next();
      } else {
        res.send('incorrect password');
      }
    } else { res.send('User not found'); }
}

module.exports = router;