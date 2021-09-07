const mongoose = require('mongoose');

const Movie = require('./models/Movie');

mongoose.connect('mongodb://localhost/express-movies');

const movies = [
    {
        title: 'Movie 1',
        genre: 'Comedy',
        plot: 'Some plot',
        cast: []
    },
    {
        title: 'Movie 2',
        genre: 'Comedy',
        plot: 'Some plot',
        cast: []
    },
    {
        title: 'Movie 3',
        genre: 'Comedy',
        plot: 'Some plot',
        cast: []
    },
]

Movie.insertMany(movies)
	.then(movies => {
		console.log(`Success - ${movies.length} movies seeded to the database`);
		mongoose.connection.close();
	})
	.catch(err => {
		console.log(err);
	})


