var signupcard = document.getElementById('signupcard');
var logincard = document.getElementById('logincard');

$.ajaxSetup({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

function showlogincard() {
    logincard.style.display = 'block';
    signupcard.style.display = 'none';
}

function showsignupcard() {
    logincard.style.display = 'none';
    signupcard.style.display = 'block';
}

function login() {
    console.log('login');
    var lusername = document.getElementById('loginusername').value;
    var lpassword = document.getElementById('loginpassword').value;
    var lpayload =  {
        username: lusername,
        password: lpassword
    };
    $.post("http://localhost:5000/loginuser",
        JSON.stringify(lpayload),
        function (data, status) {
            console.log(JSON.stringify(data));
        });
}

function signup() {
    console.log('signup');
    var susername = document.getElementById('signupusername').value;
    var sfirstname = document.getElementById('signupfirstname').value;
    var slastname = document.getElementById('signuplastname').value;
    var spassword = document.getElementById('signuppassword').value;
    var spayload = {
        username: susername,
        firstname: sfirstname,
        lastname: slastname,
        password: spassword
    };
    $.post("http://localhost:5000/signup",
    JSON.stringify(spayload),
        function (data, status) {
            console.log(JSON.stringify(data));
            alert("Data: " + data + "\nStatus: " + status);
        });
}