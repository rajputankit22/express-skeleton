var express = require('express');
var router = express.Router();
var signup = require('./signup');
var login = require('./login');
var afterlogin = require('./afterlogin');

/* GET home page. */
router.get('/', signup.rubbish);
router.post('/', signup.post);
router.get('/login', login.rubbish);
router.post('/login_users', login.post);

router.get('/session/:fname', afterlogin.get);
router.get('/logout', afterlogin.logout);

module.exports = router;
