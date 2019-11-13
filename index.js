var express = require('express');
var signup = require('./routes/signup');
var loginuser = require('./routes/loginuser');
var app = express();


app.use(express.static('front end'))
app.use(express.json());
app.use(timeLog);
app.use('/signup', signup);
app.use('/loginuser', loginuser);


function timeLog(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    console.log('Time: ', Date.now())
    next()
}

var port = process.env.PORT || 5000;
app.listen(port , () => console.log(`Listening on port ${port}.... `));
                                                                                                            