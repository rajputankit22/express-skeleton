var express = require('express');
var router = express.Router();
var moment = require('moment');
var User = require('../../models/user');



module.exports = {
      get : function(req, res) {
             var ses = {
                  n : req.session.name,
                  e : req.session.email

             };
            res.render('session', { title: 'Welcome!', data : ses  });
      },
      logout : function(req, res) {

                req.session.destroy();

            res.render('login', { title: 'Login!'});
      }
    };
