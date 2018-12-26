# Technical Test TRATO

_Este proyecto es presentado para ser evaluado en el ejercicio de crear una API REST de Node.js con MySQL_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋 e Instalación 🔧

_Se necesita instalar Node.js > 8, clonar el repositorio e iniciar npm init_

```
Despues de instalar Node.js, desde el CLI:

git clone git@gitlab.com:seraph07/technical-test-trato.git
npm install
```

## Ejecutando las pruebas ⚙️

_Para ejevutar las pruebas, se usa nodemon_

```
nodemon app.js
```
_Se recomienda usar Postman para ejecutar las pruebas_
```
Esta API REST se trata sobre un CRUD de una base de datos de películas. Las acciones son las siguientes:
El formato JSON para usar en los verbos que lo soliciten es el siguiete:
     {
         "mov_title": "Nombre de la Película",
         "mov_year": 2015,
         "mov_time": 200,
         "mov_lang": "Language"
     }


GET url/movies se obtiene la lista de todas las películas
GET url/movies/:movieId se obtiene una pelicula en específico por su Id
POST url/movies se crea un nuevo registro siguiendo el formato JSON
PUT url/movies/:movieId modifica un registro existente usando el formato JSON
DELE ulr/movies/:movieId elimina un registro especificando un Id
```
## Construido con 🛠️


* [mysql](https://www.npmjs.com/package/mysql) - El conector a la base de datos
* [nodemon](https://www.npmjs.com/package/nodemon) - Debuggeador del servidor de pruebas
* [body-parser](https://www.npmjs.com/package/body-parser) - Para obtener y parsear los datos entre verbos y JSON

## Autores ✒️

* **Rafael Herrera** - *Trabajo Inicial* - [seraph07](https://gitlab.com/seraph07)