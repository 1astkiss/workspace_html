// JavaScript source code
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var client = mysql.createConnection({
    user: 'root',
    password: 'kiss1234',
    database: 'company'
});

var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/products', function (request, response) {
    client.query('SELECT * FROM products', function (error, data) {
        if (error) {
            console.log('쿼리문장에 오류');
        } else {
            response.send(data);
        }
    });
});

app.get('/products/:id', function (request, response) {
    var id = Number(request.params.id);

    client.query('select * from products where id=?', [id],
        function (error, data) {
            response.send(data);
        }
    );
});

app.post('/products', function (request, response) {
    var name = request.body.name;
    var modelnumber = request.body.modelnumber;
    var series = request.body.series;

    client.query('insert into products (name, modelnumber, series) values(?,?,?)', [name, modelnumber, series],
        function (error, data) {
            response.send(data);
        }
    );
});

app.put('/products/:id', function (request, response) {
    var id = Number(request.params.id);
    var name = reqeust.body.name;
    var modelnumber = request.body.modelnumber;
    var series = requst.body.series;
    var query = 'update products set ';

    if (name) query += 'name="' + name + '" ';
    if (modelnumber) query += 'modelnumber="' + modelnumber + '" ';
    if (series) query += 'series="' + series + '" ';
    query += 'where id=' + id;

    client.query(query, function (error, data) {
        response.send(data);
    });
});

app.delete('/products/:id', function (request, response) {
    var id = Number(request.params.id);

    client.query('delete from products where id=?', [id],
        function (error, data) {
            response.send(data);
        }
    );
});

app.listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});

