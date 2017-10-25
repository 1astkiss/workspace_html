var express = require('express');

var app = express();

app.use(function (request, response) {
    response.send('<meta charset="utf-8" /><h1>Hello 안녕!!</h1>');
});

app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});