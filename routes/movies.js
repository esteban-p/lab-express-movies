const router = require("express").Router();
const { render } = require("../app");
const Celebrity = require("../models/Celebrity");
const Movie = require('../models/Movie');

router.get('/movies', (req, res, next) => {
	Movie.find()
		.then(moviesFromDB => {
			//console.log(moviesFromDB);
			res.render('movies/index', { moviesList: moviesFromDB });
		})
		.catch(err => next(err));
})

router.get('/movies/new', (req, res, next) => {
    Celebrity.find()
		.then (celebritiesFromDB => {
			//console.log(celebritiesFromDB);
			res.render('movies/new', {celebritiesList: celebritiesFromDB})
		})
		.catch(err => next(err));
	
})

router.post('/movies', (req, res, next) => {
	//console.log(req.body);
	const { title, genre, plot, cast } = req.body;
	Movie.create({
		title: title,
		genre: genre,
		plot: plot,
		cast: cast
	})
		.then(createdMovie => {
			//console.log(createdMovie);
			res.redirect(`/movies/${createdMovie._id}`);
		})
		.catch(err => next(err));
	
	
})

router.get('/movies/:id', (req, res, next) => {
    //console.log(req.params.id);
	Movie.findById(req.params.id).populate('cast')
        .then(movieFromDB => {
            console.log(movieFromDB);
            res.render('movies/show', { movieCard: movieFromDB });
        })
        .catch(err => next(err));
})

module.exports = router;
