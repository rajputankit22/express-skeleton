var express = require('express');
var router = express.Router();
var User = require('../../models/user');

module.exports = {
      rubbish : function(req, res) {
            res.render('signup', { title: '"Just Do It"' });
      },

      post : function(req, res) {

        var data = req.body;
        // console.log(data);
        var query = new User(data);
        console.log(query);
        query.save(function(err, result){
        if(err) return res.json({error : true , reason : err});

        return res.json({error : false, value : result});
        });
      }
};
