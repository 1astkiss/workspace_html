// JavaScript source code
var mysql = require('mysql');
var client = mysql.createConnection({
    user: 'root',
    password: 'kiss1234'
});

client.query('use company');
client.query('SELECT * FROM products', function (error, result, fields) {
    if (error) {
        console.log('�������忡 ����');
    } else{
        console.log(result);
    }
});