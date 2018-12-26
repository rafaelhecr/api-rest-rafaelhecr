/**
 * Proyecto creado para prueba tecnica de TRATO
 * Realizado por: Rafael Adrian Herrera Cruz a las 17:59 p.m.
 * 
 * Esta API REST se trata sobre un CRUD de una base de datos de películas. Las acciones son las siguientes:
 * 
 * El formato JSON para usar en los verbos que lo soliciten es el siguiete:
 *      {
 *          "mov_title": "Nombre de la Película",
 *          "mov_year": 2015,
 *          "mov_time": 200,
 *          "mov_lang": "Language"
 *      }
 * 
 * 
 * GET url/movies se obtiene la lista de todas las películas
 * GET url/movies/:movieId se obtiene una pelicula en específico por su Id
 * POST url/movies se crea un nuevo registro siguiendo el formato JSON
 * PUT url/movies/:movieId modifica un registro existente usando el formato JSON
 * DELE ulr/movies/:movieId elimina un registro especificando un Id
 **/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

//Inicializar la conexion a la base de datos
const mconnection = mysql.createConnection({
    host: 'awstest.cyc7p1jsr39v.us-west-2.rds.amazonaws.com',
    user: 'awstest',
    password: 'awstest.2017',
    database: 'awstest'
});

mconnection.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./routes/appRoutes');
routes(app);

//Inicializador del servidor con el puerto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`La aplicación esta a la escucha en ${PORT}`);
});



