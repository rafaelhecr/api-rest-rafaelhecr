'use strict';

const mysql = require('mysql');


//Conexion a la base de datos
const connection = mysql.createConnection({
    host: 'awstest.cyc7p1jsr39v.us-west-2.rds.amazonaws.com',
    user: 'awstest',
    password: 'awstest.2017',
    database: 'awstest'
});

connection.connect((err) => {
    if (err) throw err;
});

module.exports = connection;