const router = require("express").Router();
const { render } = require("../app");
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next) => {
	Celebrity.find()
		.then(celebritiesFromDB => {
			//console.log(celebritiesFromDB);
			res.render('celebrities/index', { celebritiesList: celebritiesFromDB });
		})
		.catch(err => {
			next(err);
		})
})

router.get('/:id', (req, res, next) => {
    //console.log(req.params);
    Celebrity.findById(req.params.id)
        .then(celebrityFromDB => {
            //console.log(celebritiesFromDB)
            res.render('celebrities/show', { celebrityCard: celebrityFromDB })
        })
        .catch(err => {
			next(err);
		})
})

module.exports = router;