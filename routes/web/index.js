var express = require('express');
var router = express.Router();
var signup = require('./signup');
var login = require('./login');
var afterlogin = require('./afterlogin');
var middlewares = require('../../middlewares');

/* GET home page. */
router.get('/', signup.rubbish);
router.post('/', signup.post);
router.get('/login', login.rubbish);
router.post('/login_users', login.post);

router.get('/session', middlewares.verify, afterlogin.get);
router.get('/logout', afterlogin.logout);

module.exports = router;
