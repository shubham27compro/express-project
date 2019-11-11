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

      // return the JWT token for the future API calls
      // res.addHeader("Access-Control-Allow-Origin", "*");
      
      res.json({
        success: true,
        message: req.user.username +' Login successful!',
        token: token
      });
   
    // res.send("login successfull");
   
});

function authenticateUser(req, res, next){
    var user = {
        username: req.body.username,
        password: req.body.password
    };
    var rawdata = fs.readFileSync('./database/users.json');
    var usersDB = JSON.parse(rawdata);
    if(usersDB.hasOwnProperty(user.username)){
        req.user = user;
        next();
    } else { res.send('User not found'); }
}

module.exports = router;