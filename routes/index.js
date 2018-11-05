var express = require('express');
var router = express.Router();

//getting index page
router.get('/', function(req, res) {
	res.render('pageLogin/index', { title: 'The Portfolio Page'});
});

module.exports = router;