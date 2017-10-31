var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/data.jsonp', function (request, response) {
    var callback = request.query.callback;

    response.send(callback + '(' +
        JSON.stringify({
        제품명: '7D 건조 망고',
        유형: '당절임',
        성분: '망고, 설탕, 치자황색도',
        원산지: '필리핀'
        }) + ')'
    );
});

app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});