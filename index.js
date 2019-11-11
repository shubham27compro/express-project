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
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    // res.writeHead(200, {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Headers": "*"
    //   });
    // res.setheaders({
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': '*'
    //   })
    console.log('Time: ', Date.now())
    next()
}

var port = process.env.PORT || 5000;
app.listen(port , () => console.log(`Listening on port ${port}.... `));
                                                                                                            