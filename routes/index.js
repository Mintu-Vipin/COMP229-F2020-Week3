/*index.js
Mintu Vipin Joy
301135483
9/10/2020 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});


/* GET Contact Us page. */
router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Contact' });
});





module.exports = router;
