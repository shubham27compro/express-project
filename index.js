var express = require('express');
var signup = require('./routes/signup');
var loginuser = require('./routes/loginuser');
var app = express();

app.use(express.json());
app.use(timeLog);
app.use('/signup', signup);
app.use('/loginuser', loginuser);

app.get('/', (req, res) => {
    res.send("hello world");
} );

function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
}

var port = process.env.PORT || 5000;
app.listen(port , () => console.log(`Listening on port ${port}.... `));
                                                                                                            