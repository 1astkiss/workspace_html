var express = require('express');
var bodyParser = require('body-parser');

var items = [{
    name: '우유',
    price: '2000'
}, {
    name: '홍차',
    price: '5000'
}, {
    name: '커피',
    price: '5000'
}];

var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/products', function (request, response) {
    response.send(items);
});
app.get('/products/:id', function (request, response) {
    var id = Number(request.params.id);

    if (isNaN(id)) {
        response.send({
            error: '숫자를 입력하세요!'
        });
    } else if (items[id]) {
        response.send(items[id]);
    } else {
        response.send({
            error: '존재하지 않는 데이터입니다!'
        });
    }
});
app.post('/products', function (request, response) {
    var name = request.body.name;
    var price = request.body.price;
    var item = {
        name: name,
        price: price
    }

    items.push(item);
    response.send({
        message: '데이터를 추가했습니다.',
        data: item
    });
});
app.put('/products/:id', function (request, response) {
    var id = Number(request.params.id);
    var name = request.body.name;
    var price = request.body.price;

    if (items[id]) {
        if (name) { items[id].name = name; }
        if (price) { items[id].price = price; }

        response.send({
            message: '데이터를 수정했습니다.',
            data: items[id]
        });
    } else {
        response.send({
            error: '존재하지 않는 데이터입니다!'
        });
    }
});

app.delete('/products/:id', function (request, response) {
    var id = Number(request.params.id);

    if (isNaN(id)) {
        response.send({
            error: '숫자를 입력하세요'
        });
    } else if (items[id]) {
        items.splice(id, 1);
        response.send({
            message: '데이터를 삭제했습니다!'
        });
    } else {
        response.send({
            error: '존재하지 않는 데이터입니다!'
        });
    }
});

app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});