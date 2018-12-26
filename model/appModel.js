'user strict';
const sql = require('../config/db');

//Constructor del objeto Movie
let Movie = function(movie){
    this.mov_title = movie.mov_title;
    this.mov_year = movie.mov_year;
    this.mov_time = movie.mov_time;
    this.mov_lang = movie.mov_lang;
};

Movie.createMovie = function createMovie(newMovie, result){
    sql.query("INSERT INTO movie SET ?", newMovie, (err, res) => {
        if (err){
            console.log("error mysql create movie:", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Movie.getMovieById = function createMovie(movieId, result){
    sql.query("SELECT * FROM movie WHERE id = ?", movieId, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else{
            result(null, res);     
        }
    });
};

Movie.getAllMovie = function getAllMovie(result){
    sql.query("SELECT * FROM movie", (err, res) => {
        if (err){
            console.log("error: ", err);
            result(null,err);
        } else {
            console.log('movie: ', res);
            result(null, res);
        }
    });
}

Movie.updateById = function(id, movie, result){
    sql.query("UPDATE movie SET mov_title = ?, mov_year = ?, mov_time = ?, mov_lang = ? WHERE id = ?", [movie.mov_title, movie.mov_year, movie.mov_time, movie.mov_lang, id], (err, res) => {
        if (err){
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Movie.remove = function (id, result){
    sql.query("DELETE FROM movie WHERE id = ?", [id], (err, res) => {
        if (err){
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Movie;