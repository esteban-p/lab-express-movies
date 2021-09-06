const router = require("express").Router();
const { render } = require("../app");
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next) => {
	Celebrity.find()
		.then(celebritiesFromDB => {
			//console.log(celebritiesFromDB);
			res.render('celebrities', { celebritiesList: celebritiesFromDB });
		})
		.catch(err => {
			next(err);
		})
})

module.exports = router;