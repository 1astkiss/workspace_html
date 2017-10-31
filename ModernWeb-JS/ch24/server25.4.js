var http = require('http');
var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/data.redirect', function (request, response) {
    var url = request.param('url');

    if (url) {
        http.get(url, function (web) {
                web.on('data', function (buffer) {
                    response.write(buffer);
                });

                web.on('end', function () {
                    response.end();
                });
            }
        );
    } else {
        response.send('url 속성이 정의되지 않았습니다');
    }
});

app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});