'use strict';

module.exports = (app) => {
    const actionsToMovie = require('../controller/appController');

    //Lista de rutas que responden de acuerdo al path y al verbo
    app.route('/movies')
        .get(actionsToMovie.list_all_movies)
        .post(actionsToMovie.create_a_movie);
    
    app.route('/movies/:movieId')
        .get(actionsToMovie.read_a_movie)
        .put(actionsToMovie.update_a_movie)
        .delete(actionsToMovie.delete_a_movie);
}