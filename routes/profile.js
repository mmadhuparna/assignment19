var express = require('express');
var router = express.Router();
var DB = require('../db');
var account = require('./account').router

// index page 
router.get('/profile/:id', function(req, res) {
    var user = DB.getUser(req.params.id);
    res.render('pageProfile/profile', { title: 'profile', user : user});
});

// about page
router.get('/about/:id', function(req, res) {
    var user = DB.getUser(req.params.id);
    res.render('pageProfile/about',{ title: 'profile', user : user});
});

// contact page 
router.get('/contact/:id', function(req, res) {
    var user = DB.getUser(req.params.id);
    res.render('pageProfile/contact',{ title: 'profile', user : user });
});

// skill page
router.get('/skills/:id', function(req, res) {
    var user = DB.getUser(req.params.id);
    res.render('pageProfile/skills',{ title: 'profile', user : user });
});

module.exports = router;