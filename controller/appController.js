'use strict';

let Movie = require('../model/appModel.js');

module.exports = {
    list_all_movies: (req, res) => {
        Movie.getAllMovie( (err, movie) => {
            console.log('controller');
            if(err){
                res.send(err);
                console.log(err);
            }
            res.send(movie);
        })
    },

    create_a_movie: (req, res) => {
        let newMovie = new Movie(req.body);
        
        //manejar resultado nulo
        if (!newMovie){
            res.status(400).send({error: true, message: 'No se ha encontrado ningun dato de la pelicula a registrar'});
        } else if(!newMovie.mov_title || !newMovie.mov_year || !newMovie.mov_time || !newMovie.mov_lang){
            console.log(newMovie.mov_title);
            res.status(400).send({error: true, message: 'Falta algún dato, por favor proporcionalo'});
        } else {
            Movie.createMovie(newMovie, (err, movie) => {
                if (err)
                    res.status(500).send({error: true, message: 'Se encontro un problema al crear el registro, intentalo de nuevo'});
                res.json(movie);
            });
        };
    },

    read_a_movie: (req, res) => {
        Movie.getMovieById(req.params.movieId, (err, movie) => {
            if (err)
                res.status(500).send({error: true, message: 'No se pudo procesar la solicitud'});
            res.json(movie);
        });
    },

    update_a_movie: (req, res) => {
        Movie.updateById(req.params.movieId, new Movie(req.body), (err, movie) => {
            if (err)
                res.status(500).send({error: true, message: 'No se pudo procesar la solicitud'});
            res.json(movie);
        })
    },

    delete_a_movie: (req, res) => {
        Movie.remove(req.params.movieId, (err, movie) => {
            if (err)
                res.status(500).send({error: true, message: 'No se pudo procesar la solicitud'});
            res.json(movie);
        });
    }
}
