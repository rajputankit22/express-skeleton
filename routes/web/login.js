var express = require('express');
var router = express.Router();
var moment = require('moment');
var User = require('../../models/user');

module.exports = {
      rubbish : function(req, res) {
            res.render('login', { title: 'Welcome!' });
      },

      post : function(req, res) {

        var data = req.body;
        // console.log(data);

        console.log(data);
      User.findOne({email : data.email}).exec(function(err, result){
        if(err) { return res.json({error : true , reason : err});}
         console.log(result);
         if(result === "" && result === null)
             return res.json("user is not exist!");

        result.comparePassword(data.password, function(err, Match){
          if(Match && !err)
          {
            // return res.json("successfully!");
            req.session.name = result.name.full;
            req.session.email = result.email;
            req.session.logintime = moment().format('LLL');
            console.log(req.session.name);
            console.log(req.session.logintime);
            // res.render('session', { title: 'Welcome!' , data : req.session.name });
            //  window.location.href = "/session/"
            res.send(req.session.name);
          }
          else
             return res.json("Invalid!");
        });


        // return res.json({error : false, value : result});
      });
      }
};
