
var express = require('express');
var router = express.Router();
var DB = require('../db');


//getting account page of user
router.get('/account/:id', function (req, res, next) {	
	var userid = req.params.id;
	var user = DB.getUser(userid);
	 res.render('pageLogin/account', { title: 'login Details', user : user}); 
		 	
});
//posting users data
router.post('/account/:id', function (req, res, next) {	
	var userid = req.params.id;
	var user = DB.getUser(userid);
	var route = ['/profile/','/about/','/contact/','/contact/','/skills/']
	for (var i in route)
	 res.redirect(route[i] + user.id);
});

router.delete('/account/:id', function(req, res) {
    var id = req.params.id;
    var deletedTask = null;
      var user = DB.getUser(id);
	  deletedTask = DB.splice(user, 1);
      res.send('Account Deleted successfully')
        
    

    if(deletedTask === null) {
        res.status(404).json({
            msg: 'Task Not Found.'
        });
    }
});
module.exports = router;

