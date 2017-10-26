//var os = require('os');
//console.log(os);

//console.log(os.hostname());
//console.log(os.type());
//console.log(os.platform());
//console.log(os.arch());

var request = require('request');

request('http://www.google.com', function (error, response, body) {
    console.log(body);
});