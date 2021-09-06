const mongoose = require('mongoose');

const Celebrity = require('./models/Celebrity');

mongoose.connect('mongodb://localhost/express-movies');

const celebrities = [
    {
        name: 'Forrest Gump',
        occupation: 'Ping-pong player; Shrimping boat captain; Runner; Fruit company investor; etc.',
        catchPhrase: 'Stupid is as stupid does.',
    },
    {
        name: 'Tony Montana',
        occupation: 'Drug lord',
        catchPhrase: 'I always tell tell the truth, even when i lie.',
    },
    {
        name: 'Dory',
        occupation: 'Blue fish',
        catchPhrase: 'I shall call him Squishy and he shall be mine and he shall be my Squishy.',
    },
]

Celebrity.insertMany(celebrities)
	.then(celebrities => {
		console.log(`Success - ${celebrities.length} celebrities seeded to the database`);
		mongoose.connection.close();
	})
	.catch(err => {
		console.log(err);
	})

