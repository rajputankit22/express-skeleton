var express = require('express');
var router = express.Router();
var moment = require('moment');
var User = require('../../models/user');

module.exports = {
      get : function(req, res) {
            res.render('session', { title: 'Welcome!', data : req.params.fname  });
      },
      logout : function(req, res) {
            res.render('login', { title: 'Login!'});
      }
    };
